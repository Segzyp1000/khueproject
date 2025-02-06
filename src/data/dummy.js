import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export const links = [
  {
    links: [
      {
        name: 'dashboard',
        icon: <FiShoppingBag />
      }
    ]
  },

  {
    title: 'User Management',
    links: [
      {
        name: 'user',
        icon: <AiOutlineShoppingCart />
      },
      {
        name: 'partner',
        icon: <IoMdContacts />
      },
      {
        name: 'campaign',
        icon: <RiContactsLine />
      },
      {
        name: 'referral',
        icon: <RiContactsLine />
      }
    ]
  },

  {
    title: 'Store Management',
    links: [
      {
        name: 'Products',
        icon: <AiOutlineStock />
      },
      {
        name: 'Stores',
        icon: <AiOutlineAreaChart />
      }
    ]
  }
];

export const Links2 = [
  {
    Links2: [
      {
        name: 'Manage Team',
        icon: <AiOutlineAreaChart />
      }
    ]
  },
  {
    Links2: [
      {
        name: 'Audit Log',
        icon: <AiOutlineAreaChart />
      }
    ]
  },
  {
    Links2: [
      {
        name: 'Help',
        icon: <AiOutlineAreaChart />
      }
    ]
  }
];
