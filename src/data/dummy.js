import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiBarChartBoxLine } from "react-icons/ri";
import { CiHome } from "react-icons/ci"
import { BsBookmarkCheck } from "react-icons/bs";
import { CiStickyNote } from "react-icons/ci"; 



export const links = [
  {
    links: [
      {
        name: 'dashboard',
        icon: <CiHome />
      }
    ]
  },

  {
    title: 'User Management',
    links: [
      {
        name: 'user',
        icon: <FiShoppingBag/>
      },
      {
        name: 'campaign',
        icon: <BsBookmarkCheck  />
      },
      {
        name: 'partner',
        icon: <IoMdContacts />
      },
      
      {
        name: 'referral',
        icon: <CiStickyNote />
      }
    ]
  },

  {
    title: 'Store Management',
    links: [
      {
        name: 'Products',
        icon: <RiBarChartBoxLine/>
      },
      {
        name: 'Stores',
        icon: <RiBarChartBoxLine />
      }
    ]
  },
  {
    title: 'Point Management',
    links: [
      {
        name: 'Rewaard',
        icon: <RiBarChartBoxLine/>
      }
     
    ]
  },
];
