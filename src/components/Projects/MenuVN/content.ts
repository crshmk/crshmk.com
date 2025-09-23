import { Icon as IconType, Smartphone, Wifi } from 'react-feather'

export type Content = {
  header: string
  apps: {
    label: string
    Icon: IconType
  }[]
  tools: string[]
  projects: {
    name: string
    Icon: IconType
    features: string[]
  }[]
  status: string
}

const content: Content = {
  header:
    'A restaurateur in Vietnam asked me to create a software platform for a food ordering app. He had successfully launched such a thing in Saigon before the pandemic restrictions, but authorities closed his business as lockdowns intensified. Because he retains relationships with the former restaurants and initial market research signaled great interest, I found this project attractive.',
  apps: [
    {
      label: 'end user facing app to place food orders',
      Icon: Wifi,
    },
    {
      label: 'restaurant dashboard to manage their account and live orders',
      Icon: Wifi,
    },
    {
      label: 'phone app for restaurants to manage incoming orders',
      Icon: Smartphone,
    },
    {
      label: 'administrative app for our office to collaborate during business hours',
      Icon: Wifi,
    },
  ],
  tools: [
    'React / TypeScript',
    'React Native',
    'Node / Express',
    'MongoDB',
    'S3',
    'Ubuntu server',
  ],
  projects: [
    {
      name: 'Ordering App',
      Icon: Wifi,
      features: [
        'third party api integration for delivery time, distance, and price',
        'WebSockets to update order status',
        'WebSockets for order chat with restaurant',
        'payments with credit cards or bank transfer',
        'searching and filtering',
        'customer accounts with multiple addresses for quick delivery updates',
        'customer accounts with past orders and easy reordering',
        'customer accounts with favorite restaurants',
        'English and Vietnamese languages',
      ],
    },
    {
      name: 'Restaurant App',
      Icon: Wifi,
      features: [
        'multiple list views for incoming orders',
        'third party api integration for delivery and delivery status',
        'WebSockets for order updates and chats with customers',
        'menu management with sleek, nested drag and drop',
        'accounting, charts, and other account management',
        'toggles for item availability and closures',
        'image service',
      ],
    },
    {
      name: 'React Native App',
      Icon: Smartphone,
      features: [
        'push notifications for new orders, order updates, and messages',
        'WebSockets for other live updates',
        'some functionality from the Restaurant web app',
      ],
    },
    {
      name: 'Office Admin App',
      Icon: Wifi,
      features: [
        'manage live orders',
        'alert system errors',
        'view active users',
        'view live delivery updates',
      ],
    },
  ],
  status: 'The software is built. The management team in Vietnam is waiting for licenses to provide e-commerce and payment, and for other government approvals.'
}

export default content
