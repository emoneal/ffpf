const express = require("express")
const partyRouter = express.Router()
const Party = require('../models/parties.js')

// Get All parties
partyRouter.get("/", (req, res, next) => {
  Party.find((err, parties) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(parties)
  })
})

// Get party by id

partyRouter.get("/:partyId", (req, res, next) => {
  Party.findOne(
    { _id: req.params.partyId },
    (err, foundParty) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(foundParty)
    }
  )

  }
)

// Get parties by user id
partyRouter.get("/user", (req, res, next) => {
  Party.find({ user: req.auth._id }, (err, parties) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(parties)
  })
})

// Add new party
partyRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newParty = new Party(req.body)
  newParty.save((err, savedparty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedparty)
  })
})

// Delete party
partyRouter.delete("/:partyId", (req, res, next) => {
  Party.findOneAndDelete(
    { _id: req.params.partyId, user: req.auth._id },
    (err, deletedparty) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete party: ${deletedparty.title}`)
    }
  )
})

// Update party
partyRouter.put("/:partyId", (req, res, next) => {
  Party.findOneAndUpdate(
    { _id: req.params.partyId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedParty) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedParty)
    }
  )
})

module.exports = partyRouter