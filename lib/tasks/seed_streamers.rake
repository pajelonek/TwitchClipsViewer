task seed_streamers: :environment do

  Streamer.create(
    name: 'SuperStreamer',
    language: 'Polish',
    channel_id: 112231
  )

  Streamer.create(
    name: 'SuperStreamer2',
    language: 'Polish',
    channel_id: 232323
  )

  puts 'complete'
end