const express = require('express');

import { BucketController } from '../controllers'

const router = express.Router();
module.exports = router;

// Buckets

router.route('/').post((req, res) => BucketController.createBucket(req, res));
router.route('/').put((req, res) => BucketController.updateBucket(req, res));
router.route('/').get((req, res) => BucketController.getAllBuckets(req, res));
router.route('/:bucketName').get((req, res) => BucketController.getBucket(req, res));
router.route('/:bucketID').delete((req, res) => BucketController.deleteBucket(req, res));

// Objects

router.route('/objects/').post((req, res) => BucketController.searchObjects(req, res));
router.route('/objects/delete').post((req, res) => BucketController.deleteObjects(req, res));

router.route('/objects/folder').post((req, res) => BucketController.createFolder(req, res));
router.route('/objects/move').put((req, res) => BucketController.moveObjects(req, res));

router.route('/objects/*').put((req, res) => BucketController.uploadObjects(req, res));
