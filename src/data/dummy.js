import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiBarChartBoxLine } from "react-icons/ri";
import { CiHome } from "react-icons/ci"
import { BsBookmarkCheck } from "react-icons/bs";
import { CiStickyNote } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";

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
        name: 'partner',
        icon: <IoMdContacts />
      },
      {
        name: 'campaign',
        icon: <BsBookmarkCheck  />
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

export const Links2 = [
  {
    Links2: [
      {
        name: 'Manage Team',
        icon: <FaUserPlus/>
      }
    ]
  },
  {
    Links2: [
      {
        name: 'Audit Log',
        icon: <IoGridOutline/>
      }
    ]
  },
  {
    Links2: [
      {
        name: 'Help & First Step',
        icon: <FaHeadphones/>
      }
    ]
  }
];
