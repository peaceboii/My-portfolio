// Portfolio data — all content sourced from original portfolio
export const SKILLS = [
    {
        icon: '🐍',
        category: 'Core Language',
        title: 'Python',
        tags: ['Python', 'Automation', 'Scripting', 'Debugging'],
    },
    {
        icon: '🤖',
        category: 'AI & ML',
        title: 'Artificial Intelligence',
        tags: ['NLP', 'LLM', 'MLOps', 'Fine-Tuning', 'LoRA'],
    },
    {
        icon: '📈',
        category: 'Fintech',
        title: 'Trading & Finance',
        tags: ['Trading Bots', 'Forex', 'Algorithmic Trading', 'Backtesting'],
    },
    {
        icon: '🌐',
        category: 'Backend',
        title: 'Backend Development',
        tags: ['Django', 'Flask', 'REST API', 'PostgreSQL', 'SQLAlchemy'],
    },
    {
        icon: '🛠️',
        category: 'DevOps',
        title: 'Tools & Infrastructure',
        tags: ['Docker', 'Git', 'CI/CD', 'Web Scraping', 'API Integration'],
    },
    {
        icon: '💻',
        category: 'Frontend',
        title: 'Web Technologies',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    },
]

export const PROJECTS = [
    {
        title: 'Finance Q&A Bot — GPT-2 + LoRA',
        chip: 'NLP',
        emoji: '🤖',
        description:
            'Fine-tuned GPT-2 Medium with LoRA on a curated 10,000+ finance Q&A dataset; integrated Streamlit UI with citations and BLEU/ROUGE/BERTScore evaluation.',
        metrics: [
            { label: 'BLEU', value: '57.91' },
            { label: 'ROUGE-L', value: '0.64' },
            { label: 'BERTScore-F1', value: '0.94' },
        ],
        github: 'https://github.com/peaceboii/gpt2-finance-qa.git',
        demo: 'https://gpt2-finance.streamlit.app/',
    },
    {
        title: 'Personal Finance Tracker',
        chip: 'Full-Stack',
        emoji: '💰',
        description:
            'A full-stack Flask + PostgreSQL web application for tracking income & expenses, with secure auth, form validation, and a responsive UI. Hosted on Render.',
        metrics: [],
        github: 'https://github.com/peaceboii/personal-finance-tracker',
        demo: 'https://personal-finance-tracker-1-3vl9.onrender.com',
    },
    {
        title: 'News Bot',
        chip: 'API',
        emoji: '📰',
        description:
            'A Python bot that fetches news based on user preferences, built as a full-stack application with the Django framework.',
        metrics: [],
        github: 'https://github.com/peaceboii/NewsBot.git',
        demo: 'https://newsbot-gzlm.onrender.com/',
    },
]

export const CONTACT = {
    email: 'kumaravelu2003@gmail.com',
    linkedin: 'https://linkedin.com/in/kumaravel-raj',
    github: 'https://github.com/peaceboii',
    resume: '/assets/resume.pdf',
    blurb:
        'Open to collaborations, feedback, and interesting finance/AI problems. I love connecting with people who share a passion for fintech and intelligent systems.',
}

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]
