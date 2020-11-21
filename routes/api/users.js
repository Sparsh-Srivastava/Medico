const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateRegisterInputDoc = require("../../validation/registerDoc");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/user");

// Load Doctor model
const Doc = require("../../models/doc");

//Load Med model
const Med = require("../../models/med");
const e = require("express");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.json({ error: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              id: user.id,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.json({ error: "Password incorrect" });
      }
    });
  });
});

// @route POST api/users/registerDoc
// @desc Register Doc
// @access Public
router.post("/registerDoc", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInputDoc(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Doc.findOne({ email: req.body.email }).then((doc) => {
    if (doc) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newDoc = new Doc({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        special: req.body.special,
        bio: req.body.bio,
        city: req.body.city,
        state: req.body.state,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newDoc.password, salt, (err, hash) => {
          if (err) throw err;
          newDoc.password = hash;
          newDoc
            .save()
            .then((doc) => res.json(doc))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/loginDoc", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  Doc.findOne({ email }).then((doc) => {
    // Check if user exists
    if (!doc) {
      return res.json({ error: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, doc.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: doc.id,
          name: doc.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              id: doc.id,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.json({ error: "Password incorrect" });
      }
    });
  });
});

// Patient Contacting Doctor
router.post("/contactDoctor", (req, res) => {
  let { name, email, description } = req.body;
  let doctorId = "5fb9345a4712ae46753b55cc";
  let patientId = "5fb92bb6b44a0c3e8d9a9482";
  let newMessage = {
    doctorId: doctorId,
    patientId: patientId,
    name: name,
    email: email,
    description: description,
    date: new Date(),
  };
  User.findByIdAndUpdate(
    patientId,
    { $push: { yourMessages: newMessage } },
    function (err, doc) {
      if (err) {
        console.error(err);
      } else {
        console.log("Message saved in database");
      }
    }
  );

  Doc.findByIdAndUpdate(
    doctorId,
    { $push: { patientMessages: newMessage } },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Message sent to the doctor");
        // res.json({ message: "Send" });
      }
    }
  );
});

// Doctor Replying Back To Patient
router.post("/contactPatient", (req, res) => {
  let { replyMessage } = req.body;
  let doctorId = "5fb81a60edc0683468c63ccb";
  let patientId = "5fb906db18dd191f4ae843f2";
  let newMessage = {
    doctorId: doctorId,
    reply: replyMessage,
    date: new Date(),
  };
  User.findByIdAndUpdate(
    patientId,
    { $push: { doctorMessages: newMessage } },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Message sent to the patient");
        // res.json({ message: "Send" });
      }
    }
  );
});

// Fetch All Doctors
router.get("/allDoctors", (req, res) => {
  Doc.find({}, (err, doctors) => {
    if (err) {
      console.log(err);
    } else {
      res.json(doctors);
    }
  });
});
// Get doctors based on the location
router.post("/getDoctorsAtLocation", (req, res) => {
  Doc.find({ city: req.body.city }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

// Get Patient Information
router.post("/getPatientInfo", (req, res) => {
  User.findById(req.body.patientId, (err, doctors) => {
    if (err) {
      console.log(err);
    } else {
      res.json(doctors);
    }
  });
});

// Get Doctor Information
router.post("/getDoctorInfo", (req, res) => {
  Doc.findById(req.body.id, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

//Patient's med info
router.post("/profile", (req, res) => {
  let newMed = new Med({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    dob: req.body.dob,
    city: req.body.city,
    blood: req.body.blood,
    address: req.body.address,
    description: req.body.description,
    emergencyName: req.body.emergencyName,
    emergencyNum: req.body.emergencyNum,
    gender: req.body.gender,
  });

  if (!newMed) {
    return res.status(400).json({
      success: false,
      error: "You must provide data",
    });
  }

  if (!newMed) {
    return res.status(400).json({ success: false, error: err });
  }

  User.findById(req.body.id, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      newMed
        .save()
        .then((med) => {
          user.medicalDetails = newMed;
          user
            .save()
            .then((med) => {
              console.log(med);
            })
            .catch((err) => {
              console.log("Error");
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  // newMed
  //   .save()
  //   .then((med) => {
  //     res.json(med);
  //   })
  //   .catch((error) => {
  //     res.json("Message not saved");
  //   });
});

router.post("/patientInformation", (req, res) => {
  console.log(req.body.id);
  User.findById(req.body.id)
    .populate("medicalDetails")
    .exec(function (err, user) {
      if (err) {
        console.log(err);
      } else {
        res.json(user);
      }
    });
});

router.post("/check", (req, res) => {
  User.findOne({ name: req.body.name })
    .populate("medicalDetails")
    .exec(function (err, user) {
      if (err) {
        console.log(err);
      } else {
        res.json(user);
      }
    });
});

router.get("/msg", (req, res) => {
  let id = "5fb92c2ee680a53f239ad625";
  Med.findById(id, (err, msg) => {
    if (err) {
      console.log(err);
    } else {
      console.log(msg);
    }
  });
});

module.exports = router;
