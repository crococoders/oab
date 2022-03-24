import * as firestore from '@google-cloud/firestore'
import * as config from 'lib/config'

export let db: firestore.Firestore
export let images: firestore.CollectionReference

if (config.isPreviewImageSupportEnabled) {
  db = new firestore.Firestore({
    projectId: config.googleProjectId,
    credentials: config.googleApplicationCredentials
  })

  images = db.collection(config.firebaseCollectionImages)
}
