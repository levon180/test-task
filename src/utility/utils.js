import User from '../assets/avatars/user.png'
import User1 from '../assets/avatars/user1.png'
import User2 from '../assets/avatars/user2.png'
import User3 from '../assets/avatars/user3.png'

export const users = [
  {
    id: 1,
    name: 'Emma Johnson',
    position: 'Product',
    src: User
  },
  {
    id: 2,
    name: 'Janet',
    position: 'Engineering',
    src: User3
  },
  {
    id: 3,
    name: 'Aubrey',
    position: 'Product',
    src: User1
  },
  {
    id: 4,
    name: 'Jav',
    position: 'Engineering',
    src: User2
  },
]

export const messagesData = [
  {
    id: 1,
    date: "8/20/2020",
    messages: [
      {
        user: {
          id: 5,
        },
        message: 'I’m down! Any ideas??',
        time: '11:35 AM'
      }, // me
      {
        user: {
          id: 5,
        },
        message: 'Anyone on for lunch today',
        time: '11:35 AM'
      }, // me
      {
        user: {
          id: 4,
          name: 'Jav',
          position: 'Engineering',
          src: User2
        },
        message: 'I’m down! Any ideas??',
        time: '11:35 AM'
      },  // Jav
      {
        user: {
          id: 5,
        },
        message: 'I am down for whatever!',
        time: '11:36 AM'
      }, // me
      {
        user: {
          id: 3,
          name: 'Aubrey',
          position: 'Product',
          src: User1
        },
        message: 'I was thinking the cafe downtown',
        time: '11:45 AM'
      },  // Aubrey
      {
        user: {
          id: 3,
          name: 'Aubrey',
          position: 'Product',
          src: User1
        },
        message: 'But limited vegan options @Janet!',
        time: '11:45 AM'
      },  // Aubrey
      {
        user: {
          id: 5,
        },
        message: 'Agreed',
        time: '11:36 AM'
      }, // me
      {
        user: {
          id: 2,
          name: 'Janet',
          position: 'Engineering',
          src: User3
        },
        message: 'That works- I was actually planning to\n' +
          'get a smoothie anyways 👍',
        time: '12:03 PM'
      },  // Janet
      {
        user: {
          id: 1,
          name: 'Emma Johnson',
          position: 'Product',
          src: User
        },
        message: 'That works- I was actually planning to\n' +
          'get a smoothie anyways 👍',
        time: '12:04 PM'
      },  // Emma
    ]
  }
]