# Little Lemon Restaurant - Table Reservation System

This is a React-based table reservation system for the Little Lemon Restaurant, created as part of the Coursera Meta Front-End Developer Capstone Project.

## Project Overview

This application allows customers to reserve tables at Little Lemon Restaurant online. It features a booking form with date and time selection, guest count, occasion selection, form validation, accessibility features, and comprehensive unit tests.

## Features

- **Booking Form**: Complete form with date, time, number of guests, and occasion selection
- **Dynamic Time Slots**: Available times update based on selected date using a seeded random function
- **Form Validation**: Client-side validation with error messages for all required fields
- **Accessibility**: ARIA labels, roles, and attributes for screen reader support
- **Responsive Design**: Works on desktop and mobile devices
- **Unit Tests**: Comprehensive tests using Jest and React Testing Library

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sriharsha8076-create/coursera.git
cd coursera
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

To start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Running Tests

To run the test suite:
```bash
npm test
```

To run tests with coverage:
```bash
npm test -- --coverage
```

### Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be generated in the `build` folder.

## Project Structure

```
coursera/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   └── BookingForm.js  # Main booking form component
│   ├── __tests__/
│   │   └── BookingForm.test.js  # Unit tests
│   ├── App.js              # Main App component with state management
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## Component Details

### BookingForm Component

The `BookingForm` component handles user input for table reservations:

**Props:**
- `availableTimes`: Array of available time slots
- `dispatch`: Function to update available times based on selected date
- `submitForm`: Function to handle form submission

**Features:**
- Date input with HTML5 date picker
- Time selection dropdown populated with available times
- Guest count input (1-10 guests)
- Occasion selection (Birthday, Anniversary, Engagement, Other)
- Real-time validation with error messages
- Accessibility attributes (ARIA labels, roles)
- Submit button disabled until required fields are filled

### App Component

The `App` component manages the application state:

**Features:**
- Uses `useReducer` for state management
- Implements `fetchAPI` function (seeded random for consistent results)
- Implements `submitAPI` function for form submission
- Updates available times when date changes
- Displays success/error messages on submission

## API Functions

### fetchAPI(date)
Generates available time slots based on the selected date using a seeded random number generator.

**Parameters:**
- `date`: JavaScript Date object

**Returns:**
- Array of time strings (e.g., ['17:00', '18:00', '19:00'])

### submitAPI(formData)
Simulates API submission of booking data.

**Parameters:**
- `formData`: Object containing date, time, guests, and occasion

**Returns:**
- Boolean indicating success (true) or failure (false)

## Testing

The project includes comprehensive unit tests:

1. **Component Rendering Tests**: Verify form labels and inputs render correctly
2. **InitializeTimes Test**: Ensure initial times are generated correctly
3. **UpdateTimes Test**: Verify times update when date changes
4. **HTML5 Validation Test**: Check all required attributes are present

## Accessibility Features

- Semantic HTML elements
- ARIA labels for all form inputs
- ARIA roles for error messages
- `aria-invalid` and `aria-describedby` for error states
- Keyboard navigation support
- Screen reader friendly error messages
- Required field indicators

## Form Validation Rules

- **Date**: Required, must be selected
- **Time**: Required, must be selected from available times
- **Guests**: Required, must be between 1 and 10
- **Occasion**: Optional, defaults to 'Birthday'

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is busy, you can specify a different port:
   ```bash
   PORT=3001 npm start
   ```

2. **Dependencies not installing**: Clear npm cache and try again:
   ```bash
   npm cache clean --force
   npm install
   ```

3. **Tests failing**: Ensure all dependencies are installed:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom
   ```

## Contributing

This is a capstone project for educational purposes. However, suggestions and feedback are welcome!

## License

This project is created for educational purposes as part of the Meta Front-End Developer Certificate program on Coursera.

## Author

Created as part of the Coursera Meta Front-End Developer Capstone Project

## Acknowledgments

- Meta Front-End Developer Certificate Program
- Coursera
- React Documentation
- Testing Library Documentation

## Additional Notes

### Next Steps for Enhancement

- Add backend API integration
- Implement user authentication
- Add email confirmation
- Store reservations in a database
- Add admin panel for managing reservations
- Implement calendar view
- Add customer reviews section
- Include restaurant menu preview

---

For questions or issues, please refer to the Coursera course materials or reach out to course mentors.
