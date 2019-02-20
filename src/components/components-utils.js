export const findScore = (participants, userId) => {

  return participants.find(participant => participant.userId.id === userId).score

}