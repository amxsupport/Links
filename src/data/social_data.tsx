import { DevtoIcon } from '@/components/icons/devto'
import { DiscordIcon } from '@/components/icons/discord'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { SlackIcon } from '@/components/icons/nextjsargentina'
import { ResumeIcon } from '@/components/icons/resume'
import { TelegramIcon } from '@/components/icons/telegram'
import { WebIcon } from '@/components/icons/web'
import { WhatsappIcon } from '@/components/icons/whatsapp'
import { XIcon } from '@/components/icons/x'

export const SOCIAL_DATA = {
  name: 'Abdleaaziz amksa',
  initials: 'AA',
  avatar: '/assets/avatar.webp',
  about: `IT Technician | Software engineer, and AI research enthusiast. Always influenced by new technologie.
  Based in Marrakech, Morocco 🇲🇦`,
  contacts: [
    {
      title: 'Portfolio',
      url: 'https://portfolio-abdelazizamxa.vercel.app',
      icon: WebIcon
    },
    {
      title: 'Resume',
      url: 'https://drive.google.com/file/d/1-tfJUjTbF-UAlbWu61ORV8wWMY6rSm9P/view?usp=sharing',
      icon: ResumeIcon
    },
    {
      title: 'Email',
      url: 'mailto:itmasterdesigne@gmail.com',
      icon: MailIcon
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+212659346574',
      icon: WhatsappIcon
    }
  ],
  socials: [
    {
      title: 'GitHub',
      url: 'https://github.com/amxsupport',
      icon: GithubIcon
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdelaaziz-amksa-28689753/',
      icon: LinkedinIcon
    },
    {
      title: 'The everything app',
      url: 'https://x.com/abdoudev',
      icon: XIcon
    },
    {
      title: 'Dev Community',
      url: 'https://dev.to/amxsupport',
      icon: DevtoIcon
    },
    {
      title: 'Telegram',
      url: 'https://t.me/abdelaazizamx',
      icon: TelegramIcon
    }
  ],
  communities: [
    {
      title: 'Slack Community',
      url: 'https://join.slack.com/t/amxsupportdev-d7q7626/shared_invite/zt-2xf4lxzth-9dskj8CZS_yoi8cMipOpvw',
      icon: SlackIcon
    },
    {
      title: 'Discord Community',
      url: 'https://discord.gg/YVMNg5ND',
      icon: DiscordIcon
    }
  ]
}
