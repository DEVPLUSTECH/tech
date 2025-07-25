# Contributing to DevTechPlus Website

Thank you for your interest in contributing to the DevTechPlus website! This document provides guidelines for contributing to this project.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm (comes with Node.js)
- Git
- A GitHub account

### Development Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/devtechplus.git
   cd devtechplus
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Development Workflow

### Branch Naming Convention
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Code style/formatting changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests

Example: `feature/contact-form-validation`

### Commit Message Format
Follow conventional commits format:
```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(ui): add responsive navigation menu`
- `fix(contact): resolve form validation issue`
- `docs(readme): update installation instructions`

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new components
- Define proper interfaces and types
- Avoid `any` type unless absolutely necessary
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use proper prop types with TypeScript interfaces

### CSS/Styling
- Use Tailwind CSS classes for styling
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use semantic class names for custom CSS

### File Organization
```
src/
├── components/          # Reusable components
├── pages/              # Page components (if applicable)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── constants/          # Application constants
```

## 🧪 Testing

### Before Submitting
- Run the development server: `npm run dev`
- Build the project: `npm run build`
- Run type checking: `npm run type-check`
- Run linting: `npm run lint`
- Test the production build: `npm run preview`

### Manual Testing
- Test on different screen sizes (mobile, tablet, desktop)
- Verify all links and interactions work
- Check form submissions and validations
- Test performance and loading times

## 📋 Pull Request Process

### Before Creating a PR
1. Ensure your fork is up to date with the main repository
2. Create a new branch from `main`
3. Make your changes and commit them
4. Push your branch to your fork
5. Test your changes thoroughly

### Pull Request Template
When creating a PR, please include:

**Description:**
Brief description of changes made

**Type of Change:**
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

**Testing:**
- [ ] Tested locally
- [ ] Works on mobile devices
- [ ] Passes all checks
- [ ] No console errors

**Screenshots:** (if applicable)
Add screenshots showing the changes

### Review Process
1. Automated checks will run (build, lint, type-check)
2. Maintainers will review your code
3. Address any requested changes
4. Once approved, your PR will be merged

## 🐛 Bug Reports

### Before Reporting
- Check existing issues to avoid duplicates
- Try to reproduce the bug consistently
- Test on the latest version

### Bug Report Template
```markdown
**Describe the Bug**
A clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment**
- OS: [e.g., macOS, Windows, Linux]
- Browser: [e.g., Chrome, Firefox, Safari]
- Version: [e.g., 91.0.4472.124]
- Device: [e.g., iPhone 12, Desktop]
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the proposed feature

**Problem Solved**
What problem does this feature solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other relevant information
```

## 📞 Getting Help

If you need help with contributing:
- Check existing documentation
- Look at previous pull requests for examples
- Open an issue with the `question` label
- Contact the maintainers directly

## 🙏 Recognition

Contributors will be recognized in:
- The project's contributor list
- Release notes for significant contributions
- Special mentions for outstanding contributions

## 📄 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Maintain professionalism in all interactions

## 📊 Development Stats

- **Build Time**: ~30 seconds
- **Bundle Size**: Optimized for web performance
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Support**: Fully responsive design

---

Thank you for contributing to DevTechPlus! Your efforts help us build better digital solutions. 🚀
