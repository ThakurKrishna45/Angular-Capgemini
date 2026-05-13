# Task2
requirements:
1. Navigation Bar (Fixed/Sticky)
Logo/Restaurant name
Links: Home, Menu, About, Contact
Should remain visible while scrolling
2. Hero Section
Eye-catching banner with restaurant image
Catchy tagline (e.g., "Where Flavor Meets Tradition")
Call-to-action button ("View Menu" or "Reserve Table")
3. About Section
Brief description of the restaurant (3-4 sentences)
Mission statement or unique selling point
Image gallery (at least 3 images in a grid)
4. Menu Section
At least 3 categories (Starters, Main Course, Desserts)
3-4 items per category with:
Dish name
Brief description
Price
Optional: dietary icons (vegetarian/vegan)
5. Reservation Form
Fields: Name, Email, Phone, Date, Time, Number of guests
Submit button
Basic styling (no backend needed)
6. Footer
Address, phone number, email
Social media icons (placeholders OK)
Opening hours
Copyright notice

# Assignment: Student Registration Form for Online Learning Platform
 
## Objective
Create a comprehensive student registration form for "EduLearn Academy" - an online learning platform. The form should demonstrate your understanding of HTML form elements, input types, validation, and best practices.
 
## Problem Description
EduLearn Academy is launching a new online learning platform and needs a professional registration form for new students. You are hired as a web developer to create this registration form that collects all necessary information from prospective students while demonstrating proper use of HTML5 form elements and validation.
 
## Form Requirements
 
### 1. Required Form Elements
Your registration form must include the following HTML form elements:
 
- form - Main form container with proper attributes
- input - Various input types for different data
- textarea - For multi-line text input (comments, bio)
- select - Dropdown menus for selections
- option - Options within dropdowns
- optgroup - Grouped options (e.g., countries by continent)
- button - Action buttons
- label - Labels for all form controls
- fieldset - Group related fields together
- legend - Titles for fieldsets
- datalist - Autocomplete suggestions
- output - Display calculated results
 
### 2. Input Types to Include
Demonstrate the following HTML5 input types:
 
1. text - Name, username, general text
2. password - Secure password entry
3. email - Email validation
4. tel - Phone number
5. url - Website/portfolio link
6. number - Numeric values (age, budget)
7. range - Slider for ratings/preferences
8. date - Date of birth, start date
9. time - Preferred time
10. datetime-local - Session scheduling
11. month - Course start month
12. week - Week selection
13. color - Theme preference
14. search - Search functionality
15. file - Document/image uploads
16. checkbox - Multiple choice selections
17. radio - Single choice from options
18. hidden - Hidden values (user ID, etc.)
19. submit - Form submission
20. reset - Clear form
21. button - Custom actions
22. image - Image as submit button
 
### 3. Important Attributes
Use these attributes appropriately throughout your form:
 
Form Attributes:
- action, method, enctype, autocomplete, target
 
Input Attributes:
- required, placeholder, value, readonly, disabled
- autofocus, pattern, min, max, minlength, maxlength
- step, multiple, accept, size, checked
- name, id (and corresponding 'for' in labels)
 
### 4. Validation Requirements
Implement proper HTML5 validation:
- Required fields for essential information
- Email format validation
- URL format validation
- Number and date range restrictions
- Pattern matching for specific formats (phone, username)
- File type restrictions for uploads
- Minimum/maximum length for text inputs
 
### 5. Form Sections
Organize the form into logical sections:
 
1. **Personal Information**
   - Name (First, Middle, Last)
   - Date of Birth
   - Gender (Radio buttons)
   - Profile Picture Upload
 
2. **Contact Details**
   - Email Address
   - Phone Number
   - Website/Portfolio URL
   - Address (with country/city selection)
 
3. **Account Setup**
   - Username
   - Password (with confirmation)
   - Security Question
your registration form into the following logical sections using fieldset and legend:
 
1. Personal Information
   - Full Name (First, Middle, Last)
   - Date of Birth (with age restriction: 16-60 years)
   - Gender selection
   - Profile Picture upload (image files only)
 
2. Contact Details
   - Email Address (with validation)
   - Phone Number (with pattern)
   - Website/Portfolio (optional)
   - Country and City selection
   - Full Address (textarea)
 
3. Account Setup
   - Username (alphanumeric, 5-20 characters)
   - Password (strong password requirements)
   - Confirm Password
   - Security Question with Answer
 
4. Educational & Professional Details
   - Highest Education Level
   - Field of Study
   - Years of Experience (range slider 0-40)
   - Primary Skill (with autocomplete suggestions)
   Deliverables
 
Submit the following:
 
1. RegistrationForm.html
   - Well-structured, semantic HTML5 code
   - Proper indentation and formatting
   - Comments explaining different sections
   - All form elements properly labeled with 'for' attribute
   - Organized into logical fieldsets
 
2. Code Quality
   - Clean, readable code
   - Meaningful names for IDs and names
   - Proper nesting of elements
   - Valid HTML5 syntax
 
## Grading Criteria
 
Your assignment will be evaluated on:
 
1. Completeness (40 points)
   - All 22 input types included
   - All required form elements present
   - All sections implemented
 
2. Validation (25 points)
   - Proper use of required attribute
   - Correct validation patterns
   - Appropriate min/max values
   - File type restrictions
 
3. Code Quality (20 points)
   - Proper HTML structure
   - Clean, formatted code
   - Meaningful IDs and names
   - Good use of comments
 
4. Usability (15 points)
   - Logical organization with fieldsets
   - All inputs have labels
   - Placeholder text where appropriate
   - Clear form structure
 
Bonus Points (10 points):
- Add CSS styling for professional appearance
- Create a welcome.html confirmation page
- Add JavaScript for password matching validation
- Implement custom error messages
Submission Guidelines
 
1. File Name: RegistrationForm.html
2. Ensure your code is well-commented
3. Test your form in a modern web browser (Chrome, Firefox, Edge)
4. Verify all validation rules work correctly
5. Submit by the deadline specified by your instructor
 
## Timeline
- Planning and Structure: 30 minutes
- Implementation: 2-3 hours
- Testing and Refinement: 30 minutes
- Code Review and Comments: 30 minutes
 
Total Estimated Time: 3-4 hours
 
## Testing Checklist
Before submission, verify:
- [ ] All 22 input types are included and working
- [ ] Required field validation functions properly
- [ ] Pattern validation (phone, username) works
- [ ] File uploads accept only specified types
- [ ] Date/time pickers display correctly
- [ ] Color picker opens and selects colors
- [ ] Range slider shows current value
- [ ] Radio buttons allow single selection per group
- [ ] Checkboxes allow multiple selections
- [ ] Dropdown menus work (both single and multiple)
- [ ] Datalist provides autocomplete suggestions
- [ ] Output element calculates and displays results
- [ ] Submit, Reset, and other buttons work
- [ ] All labels are properly associated with inputs
- [ ] Tab navigation flows logically
- [ ] Form layout is organized and readable
 
## Helpful Resources
- MDN Web Docs: HTML Forms
- W3Schools: HTML Form Elements
- HTML5 Input Types Reference
- Form Validation Patterns
 
## Tips for Success
1. Start with the basic structure (form and fieldsets)
2. Add one section at a time and test as you go
3. Use meaningful names for IDs and name attributes
4. Don't forget to associate labels with inputs using 'for' attribute
5. Test validation by trying to submit incomplete forms
6. Use comments to organize your code
7. Refer to the sample implementation if you get stuck
 
Good luck with your assignment!ickers function properly
- [ ] Color picker works
- [ ] Range slider updates values
- [ ] Radio buttons allow only one selection per group
- [ ] Checkboxes allow multiple selections
- [ ] Dropdown menus work (single and multiple)
- [ ] Datalist provides autocomplete suggestions
- [ ] Output element displays calculated results
- [ ] Form submits successfully
- [ ] Reset button clears all fields
- [ ] Tab navigation works logically
- [ ] Form is accessible (screen reader friendly)
 
---
 
**Good Luck!** 🚀
 

 # Problem Statement: Travel Agency Website
 
## Project Overview
Create a complete travel agency website using **HTML and CSS only** (no JavaScript). The website should consist of 3 interconnected pages showcasing various HTML elements and CSS styling techniques.
 
## Pages Required
 
### Page 1: Home Page (index.html)
**Objective:** Create an attractive landing page for the travel agency.
 
**Required HTML Elements:**
- Navigation bar with links to all 3 pages
- Hero section with heading and tagline
- Unordered list of featured destinations (minimum 4 items)
- Ordered list of "Top 5 Reasons to Travel with Us"
- At least 3 semantic HTML5 elements (header, nav, section, article, aside, footer)
- Images with proper alt text
- A table displaying "Popular Packages" with columns:
  - Destination
  - Duration (days)
  - Price
  - Package Type
  - (Minimum 5 rows of data)
- Footer with contact information and social media links
 
### Page 2: Booking Form (booking.html)
**Objective:** Create a comprehensive booking form for travel packages.
 
**Required HTML Elements:**
- Navigation bar (consistent with home page)
- Form with the following input types:
  - Text input (Name, Address)
  - Email input
  - Tel input (Phone Number)
  - Number input (Number of Travelers)
  - Date input (Travel Date)
  - Select dropdown (Destination)
  - Radio buttons (Travel Class: Economy, Business, First Class)
  - Checkboxes (Additional Services: Travel Insurance, Airport Pickup, Guided Tours)
  - Textarea (Special Requests)
  - Submit and Reset buttons
- All form fields should have proper labels
- Use fieldset and legend for grouping related form elements
- Include placeholder text where appropriate
- Footer (consistent with home page)
 
### Page 3: Gallery Page (gallery.html)
**Objective:** Showcase travel destination images and testimonials.
 
**Required HTML Elements:**
- Navigation bar (consistent across all pages)
- Definition list (dl, dt, dd) explaining different types of travel packages
- Grid of images (minimum 6 images) displaying destinations
- Blockquote elements with customer testimonials (minimum 3)
- Table showing "Office Locations" with columns:
  - City
  - Address
  - Phone
  - Email
  - (Minimum 4 rows)
- Footer (consistent with home page)
 
## CSS Requirements
 
### 1. CSS Selectors to Use:
You must demonstrate the use of the following selector types:
 
**Basic Selectors:**
- Element/Type selector (e.g., `p`, `h1`, `table`)
- Class selector (e.g., `.highlight`, `.card`)
- ID selector (e.g., `#header`, `#booking-form`)
- Universal selector (`*`)
 
**Combinators:**
- Descendant selector (e.g., `nav a`)
- Child selector (e.g., `ul > li`)
- Adjacent sibling selector (e.g., `h2 + p`)
- General sibling selector (e.g., `h2 ~ p`)
 
**Attribute Selectors:**
- `[type="text"]`
- `[type="email"]`
- Any other attribute selector
 
**Pseudo-classes:**
- `:hover` (for links and buttons)
- `:focus` (for form inputs)
- `:first-child` or `:last-child`
- `:nth-child()` or `:nth-of-type()`
 
**Pseudo-elements:**
- `::before` or `::after`
- `::first-letter` or `::first-line`
 
### 2. CSS Styling Requirements:
 
**Layout:**
- Use CSS Flexbox or CSS Grid for at least one section
- Proper spacing using margin and padding
- Box model properties (border, padding, margin)
 
**Typography:**
- Different font families (use web-safe fonts or Google Fonts)
- Font sizes, weights, and styles
- Text alignment, decoration, and transformation
- Line height and letter spacing
 
**Colors & Backgrounds:**
- Background colors and background images
- Color schemes (use a consistent color palette)
- Gradients (linear or radial) in at least one section
- RGBA or HSLA colors for transparency
 
**Tables:**
- Border-collapse property
- Styled table headers
- Alternating row colors using `:nth-child(even)` or `:nth-child(odd)`
- Hover effect on table rows
 
**Forms:**
- Styled input fields with borders and padding
- Focus states for inputs
- Styled buttons with hover effects
- Form layout using CSS
 
**Navigation:**
- Horizontal navigation bar
- Hover effects on navigation links
- Active/current page indication
 
**Responsive Considerations:**
- Use percentage or relative units (%, em, rem) where appropriate
- Max-width for containers
 
**Additional Styling:**
- Box-shadow on cards or containers
- Border-radius for rounded corners
- Transform property for hover effects (e.g., scale, rotate)
- Transition effects for smooth animations
 
## Technical Requirements
 
1. **File Organization:**
   - Create a separate CSS file (styles.css) and link it to all HTML pages
   - Alternatively, you may create page-specific CSS files
   - Use proper folder structure
 
2. **Code Quality:**
   - Proper HTML5 structure with DOCTYPE
   - Semantic HTML elements where appropriate
   - Valid HTML (use W3C validator)
   - Well-commented CSS code
   - Consistent indentation and formatting
   - Meaningful class and ID names
 
3. **Accessibility:**
   - All images must have alt attributes
   - Form labels properly associated with inputs
   - Sufficient color contrast
   - Proper heading hierarchy (h1, h2, h3, etc.)
 
4. **Cross-page Consistency:**
   - Navigation bar should be identical on all pages
   - Footer should be consistent
   - Color scheme and typography should be uniform
   - Same CSS file(s) used across all pages

   <!-- 08-05-2026 -->
   Problem Statement: Interactive Quiz Application
 
## Project Overview
Create an interactive quiz application using HTML, CSS, and JavaScript. The application should allow users to take a quiz, see their score, and review their answers. This project will test your understanding of functions, conditional statements, loops, and DOM manipulation.
 
## Objective
Build a functional quiz application for "Knowledge Hub" - an educational platform. The quiz should have multiple questions, track user responses, calculate scores, and provide feedback.
 
## Requirements
 
### Part 1: HTML Structure
Create an HTML page with the following sections:
 
1. **Header Section**
   - Application title: "Knowledge Hub Quiz"
   - Subtitle with quiz category name
   - Timer display area
 
2. **Question Display Section**
   - Question number indicator (e.g., "Question 3 of 10")
   - Question text display area
   - Four option buttons for answers (A, B, C, D)
   - Previous and Next navigation buttons
   - Submit Quiz button (hidden until last question)
 
3. **Results Section** (Initially hidden)
   - Total score display
   - Percentage calculation display
   - Pass/Fail message based on 60% threshold
   - List of all questions with:
     - Question text
     - User's answer
     - Correct answer
     - Indicator showing if answer was correct or wrong
   - Restart Quiz button
 
4. **Progress Section**
   - Progress bar showing quiz completion percentage
   - Question status indicators (answered/unanswered)
 
### Part 2: CSS Styling Requirements
 
1. **Layout**
   - Center-aligned container with maximum width of 800px
   - Responsive design that works on mobile and desktop
   - Proper spacing and margins between sections
 
2. **Color Scheme**
   - Use at least 3 different colors for:
     - Correct answers (green shade)
     - Incorrect answers (red shade)
     - Unanswered questions (gray shade)
     - Selected option highlighting
 
3. **Interactive Elements**
   - Hover effects on buttons
   - Active/selected state for chosen options
   - Disabled state for navigation buttons when appropriate
   - Smooth transitions for showing/hiding sections
 
4. **Progress Bar**
   - Visual progress bar that fills as quiz progresses
   - Different color when quiz is complete
 
### Part 3: JavaScript Functionality
 
#### Required Functions:
 
1. **startQuiz()**
   - Initialize quiz variables
   - Reset all answers
   - Display first question
   - Start timer (optional challenge)
 
2. **displayQuestion(questionNumber)**
   - Show current question and options
   - Highlight previously selected answer if any
   - Update question counter
   - Enable/disable navigation buttons appropriately
 
3. **selectAnswer(questionIndex, selectedOption)**
   - Store user's answer in an array
   - Mark question as answered
   - Update progress indicators
 
4. **nextQuestion()**
   - Validate that current question is answered
   - Move to next question using loop logic
   - Show submit button on last question
 
5. **previousQuestion()**
   - Navigate to previous question
   - Load previously selected answer
 
6. **calculateScore()**
   - Loop through all questions
   - Compare user answers with correct answers
   - Count correct answers
   - Calculate percentage
   - Return score object
 
7. **displayResults()**
   - Hide question section
   - Show results section
   - Display score and percentage
   - Use conditional statements to show pass/fail message
   - Generate detailed answer review
 
8. **checkAnswer(userAnswer, correctAnswer)**
   - Compare two answers
   - Return true or false
 
9. **updateProgressBar()**
   - Calculate completion percentage
   - Update progress bar width
   - Update answered question count
 
10. **restartQuiz()**
    - Clear all stored answers
    - Reset score to zero
    - Hide results section
    - Show question section
    - Load first question



    <!-- 11-05-26 -->
    ## Problem Description
Create an interactive web application that performs various string operations. The application should demonstrate your understanding of string methods and manipulation techniques.
 
## Requirements
 
### Task 1: String Information Display
Create a function that takes a string input and displays:
- The length of the string
- The string in uppercase
- The string in lowercase
- The first character
- The last character
- Whether the string contains any numbers
 
### Task 2: String Manipulation
Implement the following operations:
- **Reverse String**: Reverse the input string
- **Remove Whitespace**: Trim leading and trailing spaces
- **Remove All Spaces**: Remove all spaces from the string
- **Count Vowels**: Count the number of vowels (a, e, i, o, u)
- **Count Consonants**: Count the number of consonants
- **Word Count**: Count the number of words in the string
 
### Task 3: String Validation
Create validation functions for:
- **Is Palindrome**: Check if a string reads the same forwards and backwards
- **Is Email Valid**: Basic email validation (contains @ and .)
- **Has Special Characters**: Check if string contains special characters
- **Is Strong Password**: Check if password has minimum 8 characters, at least one uppercase, one lowercase, and one number
 
### Task 4: String Transformation
Implement these transformations:
- **Title Case**: Convert string to title case (first letter of each word capitalized)
- **Camel Case**: Convert string to camelCase
- **Snake Case**: Convert string to snake_case
- **Kebab Case**: Convert string to kebab-case
- **Alternating Case**: Alternate between uppercase and lowercase (aBcDeF)
 
### Task 5: String Search and Replace
Create functions to:
- Find the position of a substring
- Replace first occurrence of a word
- Replace all occurrences of a word
- Extract domain from an email address
- Extract initials from a full name (e.g., "John Doe" → "JD")
 
### Task 6: Advanced Operations
Implement:
- **Truncate String**: Truncate to specified length and add "..."
- **Repeat String**: Repeat a string n times
- **Mask String**: Mask middle characters (e.g., "1234567890" → "123****890")
- **Extract Numbers**: Extract all numbers from a string
- **Character Frequency**: Count frequency of each character
 
## Expected Output
Create an HTML page with:
1. Input field for entering text
2. Buttons for each operation
3. Display area to show results
4. Clean and user-friendly interface
5. Proper error handling for invalid inputs


<!-- <12/05/26> -->
===============================================================================

PROBLEM DESCRIPTION

===============================================================================
 
Build a Student Performance Analysis System that analyzes student data across

multiple subjects. You will work with student records, calculate statistics,

identify patterns, and generate insights using JavaScript's built-in data

structures: Arrays, Maps, and Sets.
 
===============================================================================

SAMPLE DATA STRUCTURE

===============================================================================
 
const students = [

    { id: 101, name: "Alice Johnson", age: 20, 

      subjects: ["Math", "Physics", "Chemistry"], 

      scores: [85, 90, 78] },

    { id: 102, name: "Bob Smith", age: 21, 

      subjects: ["Math", "Physics", "Chemistry"], 

      scores: [92, 88, 95] },

    { id: 103, name: "Charlie Brown", age: 19, 

      subjects: ["Math", "Physics", "Biology"], 

      scores: [78, 82, 85] },

    { id: 104, name: "Diana Prince", age: 20, 

      subjects: ["Math", "Chemistry", "Biology"], 

      scores: [95, 92, 89] },

    { id: 105, name: "Eve Davis", age: 22, 

      subjects: ["Physics", "Chemistry", "Biology"], 

      scores: [88, 85, 90] }

];
 
===============================================================================

PART 1: ARRAY OPERATIONS (20 points)

===============================================================================
 
Task 1.1: Filter and Sort (5 points)

-------------------------------------

- Filter students who scored above 85 in ALL subjects

- Sort students by their average score (descending order)

- Find students aged between 19-21

- Get list of students who study "Physics"
 
Task 1.2: Array Transformations (5 points)

-------------------------------------------

- Create new array with only student names and their average scores

- Use map() to add "grade" property based on average:

  * A: 90-100

  * B: 80-89

  * C: 70-79

  * D: 60-69

  * F: below 60

- Flatten all subjects into a single array (including duplicates)
 
Task 1.3: Array Aggregations (5 points)

----------------------------------------

- Calculate the overall class average across all subjects

- Find the highest score in each subject

- Count total number of students enrolled in each subject

- Use reduce() to find the student with highest overall average
 
Task 1.4: Array Search Operations (5 points)

---------------------------------------------

- Find a student by ID using find()

- Check if any student scored below 70 using some()

- Check if all students passed (scored >= 60) using every()

- Get index of a specific student by name using findIndex()
 
===============================================================================

PART 2: MAP OPERATIONS (20 points)

===============================================================================
 
Task 2.1: Create Subject-Score Map (5 points)

----------------------------------------------

Create a Map where keys are subject names and values are arrays of all 

scores in that subject.

Example: Map { "Math" => [85, 92, 78, 95], "Physics" => [...], ... }
 
Task 2.2: Student Performance Map (5 points)

---------------------------------------------

Create a Map with student ID as key and student object as value.

Add methods to:

- Get student by ID

- Update student scores

- Delete a student record

- Check if student exists
 
Task 2.3: Grade Distribution Map (5 points)

--------------------------------------------

Create a Map showing count of students in each grade (A, B, C, D, F).

Example: Map { "A" => 2, "B" => 3, "C" => 1, ... }
 
Task 2.4: Subject Statistics Map (5 points)

--------------------------------------------

Create a Map for each subject containing:

- Average score

- Highest score

- Lowest score

- Number of students enrolled

Example: Map { "Math" => { avg: 87.5, high: 95, low: 78, count: 4 }, ... }
 
===============================================================================

PART 3: SET OPERATIONS (20 points)

===============================================================================
 
Task 3.1: Unique Values (5 points)

-----------------------------------

- Create a Set of all unique subjects offered

- Create a Set of all unique ages

- Create a Set of all unique scores (across all students and subjects)
 
Task 3.2: Set Operations - Union, Intersection, Difference (10 points)

-----------------------------------------------------------------------

Given students' subject enrollments, implement:
 
- UNION: Find all subjects taken by either Student A OR Student B

- INTERSECTION: Find common subjects between Student A AND Student B

- DIFFERENCE: Find subjects taken by Student A but NOT by Student B

- SYMMETRIC DIFFERENCE: Subjects taken by either A or B but not both
 
Example Implementation Required:

function getUnion(set1, set2) { /* your code */ }

function getIntersection(set1, set2) { /* your code */ }

function getDifference(set1, set2) { /* your code */ }

function getSymmetricDifference(set1, set2) { /* your code */ }
 
Task 3.3: Data Validation with Sets (5 points)

-----------------------------------------------

- Create a Set of valid subject names

- Validate if a student's subjects are all valid

- Remove duplicate subjects if any student is enrolled in same subject twice

- Find students with unique subject combinations
 
===============================================================================

PART 4: COMBINED OPERATIONS (20 points)

===============================================================================
 
Task 4.1: Leaderboard Generation (5 points)

--------------------------------------------

Create a leaderboard using Arrays, Maps, and Sets:

- Rank students by average score

- Handle ties (students with same average get same rank)

- Display: Rank, Name, Average Score, Grade

- Use Map to store ranks and Set to track unique average scores
 
Task 4.2: Subject Performance Analysis (5 points)

--------------------------------------------------

For each subject, generate a report containing:

- Top 3 performers (use Array methods)

- Average score (use reduce)

- Number of students above average (use filter)

- Store results in a Map with subject as key
 
Task 4.3: Student Grouping (5 points)

--------------------------------------

Group students using Maps:

- Group by grade (A, B, C, etc.)

- Group by age

- Group by number of subjects enrolled

- Each group should contain array of student objects
 
Task 4.4: Data Deduplication and Merging (5 points)

----------------------------------------------------

- Given two arrays of student records, merge them removing duplicates

  (based on student ID)

- Use Set to track seen IDs

- Return merged array with unique students

- If duplicate found, keep the record with higher average score
 
===============================================================================

PART 5: UI IMPLEMENTATION (20 points)

===============================================================================
 
HTML Structure Requirements (8 points)

---------------------------------------

- Input section to add new student records

- Display section showing all students in a table

- Filter/Search controls:

  * Search by name

  * Filter by grade

  * Filter by subject

- Statistics dashboard showing:

  * Total students

  * Class average

  * Grade distribution

  * Subject-wise performance
 
CSS Styling Requirements (7 points)

------------------------------------

- Responsive layout (works on mobile and desktop)

- Styled table with alternating row colors

- Color-coded grades (A=Green, B=Blue, C=Yellow, D=Orange, F=Red)

- Styled input forms and buttons

- Visual statistics section with cards or panels
 
JavaScript Functionality (5 points)

------------------------------------

- Add new student dynamically

- Delete student from list

- Search/Filter functionality that updates display in real-time

- Calculate and display statistics dynamically

- All data operations must use Arrays, Maps, or Sets appropriately
 
===============================================================================

CONSTRAINTS

===============================================================================
 
- Student IDs should be unique (use Set to validate)

- Scores must be between 0-100

- Minimum 1 subject, maximum 5 subjects per student

- Subject names should be validated against a Set of valid subjects

- Age must be between 18-30
 
===============================================================================

TEST CASES

===============================================================================
 
Test Case 1: Array Operations

------------------------------

Input: Filter students with average > 85

Expected Output: Bob Smith (91.67), Diana Prince (92)
 
Test Case 2: Map Operations

----------------------------

Input: Get subject statistics for "Math"

Expected Output: { avg: 87.5, high: 95, low: 78, count: 4 }
 
Test Case 3: Set Operations

----------------------------

Input: Union of subjects for Alice and Bob

Expected Output: Set { "Math", "Physics", "Chemistry" }
 
Test Case 4: Combined Operations

---------------------------------

Input: Generate leaderboard

Expected Output: 

Rank 1: Diana Prince (92.00) - Grade A

Rank 2: Bob Smith (91.67) - Grade A

Rank 3: Eve Davis (87.67) - Grade B

Rank 4: Alice Johnson (84.33) - Grade B

Rank 5: Charlie Brown (81.67) - Grade B
 
Test Case 5: Deduplication

---------------------------

Input: 

array1 = [{ id: 101, name: "Alice", scores: [85, 90] }]

array2 = [{ id: 101, name: "Alice", scores: [90, 95] }, 

          { id: 106, name: "Frank", scores: [80, 85] }]

Expected Output: Merged array with 2 students (Alice with higher scores, Frank)

 
 <!-- 13-05-26 -->
 OBJECTIVE:

Build a Product Inventory Management System using HTML, CSS, and JavaScript that demonstrates modern JavaScript features and concepts.
 
BACKGROUND:

You are tasked with creating a web-based inventory management system for a retail store. The system should allow users to manage products, track inventory levels, filter and search products, and handle asynchronous data operations.
 
FUNCTIONAL REQUIREMENTS:
 
1. PRODUCT MANAGEMENT (20 minutes)

   - Create a Product class with the following:

     * Properties: id, name, category, price, quantity, lastUpdated

     * Static method to generate unique product IDs

     * Instance methods: updateStock(), applyDiscount(), getDetails()

     * Use private fields/closures for sensitive data (e.g., cost price)

   - Implement product operations:

     * Add new products

     * Update product quantity

     * Remove products from inventory

     * Calculate total inventory value
 
2. DATA STORAGE & RETRIEVAL (15 minutes)

   - Use Map to store products (key: product ID, value: Product object)

   - Use Set to store unique product categories

   - Implement functions using:

     * Destructuring to extract product properties

     * Spread operator to merge product updates

     * Rest parameters to handle variable arguments

   - Create an async function simulateAPICall() that:

     * Returns a Promise that resolves after 1-2 seconds

     * Simulates fetching product data from a server

     * Use async/await to handle the data loading
 
3. FILTERING & SEARCH (10 minutes)

   - Implement filter functionality using:

     * Arrow functions for callback operations

     * Array methods (filter, map, reduce)

     * Template literals for dynamic search queries

   - Create filters for:

     * Products by category

     * Products below minimum stock level

     * Products within a price range

   - Implement a generator function to paginate results (5 items per page)
 
4. UI IMPLEMENTATION (10 minutes)

   - HTML Structure:

     * Form to add new products (name, category, price, quantity)

     * Display area for product list

     * Filter controls (category dropdown, price range, search box)

     * Stock alert section for low inventory items

   - CSS Styling:

     * Responsive grid layout for product cards

     * Color-coded stock levels (red: low, yellow: medium, green: high)

     * Hover effects on product cards

     * Loading spinner for async operations
 
5. ADVANCED FEATURES (5 minutes)

   - Implement a closure-based counter for tracking total operations

   - Create a callback function for stock alerts

   - Use hoisting demonstration with var vs let/const

   - Implement module pattern (if time permits, separate into modules)
 
TECHNICAL REQUIREMENTS:
 
JavaScript Concepts to Use:

- Variables: Use let and const appropriately (avoid var except for hoisting demo)

- Data Types: String, Number, Boolean, Object, Array, Map, Set

- Operators: Arithmetic, comparison, logical, ternary

- Control Flow: if/else, switch, for, while, forEach

- Functions: Regular functions, arrow functions, async functions

- Scope: Block scope, function scope, lexical scope

- Closures: Create private variables and factory functions

- Hoisting: Demonstrate difference between var, let, const, and function hoisting

- Callbacks: Use in event handlers and array methods

- Promises: Implement for simulated API calls

- Async/Await: Handle asynchronous data loading

- Template Literals: For dynamic HTML generation and string formatting

- Destructuring: Extract values from objects and arrays

- Spread/Rest: Merge objects, clone arrays, handle variable parameters

- Classes: Define Product class with constructor and methods

- Static Methods: Implement utility methods in classes

- Map/Set: Use for efficient data storage

- Iterators: Implement custom iteration logic

- Generators: Create pagination generator function
 
SAMPLE DATA STRUCTURE:
 
Product Object Example:

{

  id: "PRD001",

  name: "Wireless Mouse",

  category: "Electronics",

  price: 25.99,

  quantity: 50,

  lastUpdated: "2026-05-13"

}
 
Initial Products (at least 8 products across 3 categories):

- Electronics: Wireless Mouse, USB Cable, Keyboard

- Clothing: T-Shirt, Jeans, Jacket

- Books: JavaScript Guide, HTML Handbook

- Stationery: Notebook, Pen Set
 
DELIVERABLES:
 
1. HTML File (index.html):

   - Semantic HTML structure

   - Form for adding products

   - Product display grid

   - Filter and search controls
 
2. CSS File (styles.css):

   - Responsive design

   - Product card styling

   - Color-coded stock indicators

   - Loading states
 
3. JavaScript File (app.js):

   - Product class implementation

   - All CRUD operations

   - Async data handling

   - Filter and search logic

   - Event handlers

 