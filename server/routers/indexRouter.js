/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data-2.json',
  { notes: [] });

router.get('/', (req, res) => {
  let viewModel = req.viewModel;
  const notes = store.get('notes');
  console.log(notes);
  res.render('index.pug', viewModel);
});

router.post('/', (req, res) => {
  let notes = store.get('notes');
  notes.push({
    title: req.body.title,
    content: req.body.content
  });
  store.set('notes', notes);
  res.redirect('/');
});

module.exports = router;