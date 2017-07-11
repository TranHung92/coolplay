import { Schema, arrayOf } from 'normalizr'
import trackSchema from './track'

const playlistSchema = new Schema('playlists')

playlistSchema.define({
	tracks: arrayOf(trackSchema)
})

export default playlistSchema