import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  //const contactList = useSelector(state => state.contactList);//store정보를 읽어온다.
  const {contactList, name} = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (name !== "") {
      const list = contactList.filter((item) => item.name.includes(name));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [name, contactList]);

  return (
    <div>
        <SearchBox />

        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
    </div>
  )
}

export default ContactList