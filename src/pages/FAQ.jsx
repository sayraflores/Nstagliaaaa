import React from 'react'


const FAQ = () => {
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, i) => (
          <div className='item'>
            <div className='title'>
              <h2>{item.question}</h2>
              <span>+</span>
            </div>
            <div className='content'>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    question: 'Are all of these items thrifted?',
    answer:
      'Yes! If there are ever any imperfections, we will make sure to post pictures of it.'

  },

  {
    question: 'How much is shipping?',
    answer:
      'Shipping depends on where you are located, you can expect it to be anywhere from $8-$10.'

  },

  {
    question: 'When will Nostalgia Merch drop?',
    answer:
      ' Fall 2022, Make sure to be on the look out!'

  },

  {
    question: 'Does Nostalgia have a store?',
    answer:
      'We are currently vendors at The Hause located at Carolina Place Mall which is a vintage shop here in Charlotte. Make sure to check us out! '

  },

  {
    question: 'Return policy?',
    answer:
      'ALL SALES ARE FINAL. Please be sure to look through EVERY picture we have posted on the product you want.'

  },

  {
    question: 'How do I book a styling appointment?',
    answer:
      "You can DM us individually or book through our link posted on the 'about us' page on the top of this page."

  }



]
export default FAQ