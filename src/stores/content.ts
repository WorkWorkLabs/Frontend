import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NavItem, Feature, Product, TeamMember, Stat } from '@/types'

export const useContentStore = defineStore('content', () => {
  // Navigation
  const navigation = ref<NavItem[]>([
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'working', label: 'Working', href: '#features' },
    { id: 'case', label: 'Case', href: '#products' },
    { id: 'team', label: 'Team', href: '#team' },
    { id: 'contact', label: 'Contact Us', href: '#contact' }
  ])

  // Hero section
  const hero = ref({
    title: 'Work everywhere',
    subtitle: 'Work anytime',
    description: 'Committed to breaking geographical limitations and creating digital infrastructure for global community collaboration',
    ctaText: 'Join now',
    ctaLink: '#contact'
  })

  // Features
  const features = ref<Feature[]>([
    {
      id: '1',
      number: '01',
      title: 'Building a global remote work ecosystem',
      description: 'Serving digital nomads, remote workers, freelancers, and super individuals'
    },
    {
      id: '2',
      number: '02',
      title: 'Providing a digital space for warm global connectivity',
      description: 'Freedom to work and live across borders, providing space to connect, collaborate and grow'
    },
    {
      id: '3',
      number: '03',
      title: 'Belief in work freedom and flexibility',
      description: '"Work everywhere，work anytime"'
    }
  ])

  // Products
  const products = ref<Product[]>([
    {
      id: '1',
      title: 'Digital Nomad Co-branded Card',
      subtitle: 'Infini & WorkWork',
      description: 'Workwork collaborate with upstream partners，while remaining independent from direct cash-out operations.',
      features: [
        { label: 'Global Pay', value: 'Visa + Master' },
        { label: 'Fees as low as', value: '0.1%', highlight: true }
      ],
      link: '#card',
      tags: []
    },
    {
      id: '2',
      title: 'One-stop connection and growth platform',
      subtitle: 'WorkWork One-stop platform',
      description: 'A one-stop platform for Web3 professionals and digital nomads，The work and life of digital nomads',
      features: [],
      link: '#platform',
      tags: ['Free job postings', 'Community-driven', 'Web3 focus', 'Remote-first']
    },
    {
      id: '3',
      title: 'Growth OS',
      subtitle: '',
      description: 'GrowthOS is the world\'s first Web3 operating system for digital nomads and super individuals, empowering digital creators and remote workers in the AI Agent era.',
      features: [],
      link: '#growth-os',
      tags: ['Create', 'cooperation', 'Trade']
    }
  ])

  // Team members
  const team = ref<TeamMember[]>([
    {
      id: '1',
      name: 'Yanbo',
      title: 'Former Head of Developer Relations at a Public Blockchain and Wallet Infrastructure Project'
    },
    {
      id: '2',
      name: 'Morty',
      title: 'Product Manager at HashKey | Former Core Developer of WTFAcademy'
    },
    {
      id: '3',
      name: 'Anna',
      title: 'Former Marketing Lead at crypto Exchanges | Social Media Influencers'
    },
    {
      id: '4',
      name: 'Rizumu',
      title: 'Independent Developer | Active Member of the Vue Community & @vuejs Core Team'
    },
    {
      id: '5',
      name: 'LIYAO',
      title: 'Currently pursuing a Master\'s in Computer Science at the University of Tsukuba | Bachelor\'s in Physics from Jilin University'
    },
    {
      id: '6',
      name: 'Seimo',
      title: 'Head of Operations at Spark Lab Accelerator | Part-time Product Manager & Full-Stack Developer'
    },
    {
      id: '7',
      name: 'StevenLynn',
      title: 'AI Product Operations at Tencent Cloud | Former Developer Operations at Dify'
    },
    {
      id: '8',
      name: 'LuooooYan',
      title: '"People-oriented" user experience design, Adventure 2025 Unite Portal Design, Apple Vision Pro interactive explorer'
    }
  ])

  // Statistics
  const stats = ref<Stat[]>([
    { id: '1', number: '1000+', label: 'Github Community', icon: '/images/github-icon.png' },
    { id: '2', number: '3200', label: 'Stars telegram', icon: '/images/tg-icon.png' }
  ])

  // Testimonial
  const testimonial = ref({
    quote: 'Work everywhere, Work everytime',
    text: 'WorkWork has been essential for my digital nomad journey, helping me find Web3 jobs while navigating visa requirements across Asia.',
    author: {
      name: 'Yanbo',
      title: 'web3 community manager'
    }
  })

  return {
    navigation,
    hero,
    features,
    products,
    team,
    stats,
    testimonial
  }
})