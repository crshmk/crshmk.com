import React from 'react'

import contactItems from './contactItems'

import ContactItem from './ContactItem'

const makeContactItem = contactItem => 
  <ContactItem key={contactItem.label} contactItem={contactItem} />

const contacts = contactItems.map(makeContactItem)

const Contacts = () => (
  <div className="cv-contacts">
    {contacts}
  </div>
)

export default Contacts


