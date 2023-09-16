# **Questions and Answers :**
### Q1: Add at least 3 Project features <br>
Ans: Here three features of this project is :
- **Course Selection:**<br> Allow users to see a list of available courses, view details about each course  and select courses they want to register for.
- **Course Listings:** <br>Display a list of selected courses name, total course credit and total price.
- **Notifications:** <br> A warning notification is shown when the course credit is 20 and remaining credit is 0 . Also a warning notification is shown when a user selects twice in a course.
---
### Q2: Discuss how you managed the state in your assignment project.<br>
Ans: In this project, state management is very important. I use "useState" and "useEffect" like a state. Manage this state are:
1. I initialize the 'allCourses' state variable using 'useState([])'. 'allCourses' will hold the array of course data.
2. I use 'useEffect' to fetch course data from a data.json which i made according to course registration detail.  The function inside useEffect is an  function  that makes the data.json request and updates the state with the received data using setAllCourses.
3. I include an empty dependency array ([]) as the second argument to useEffect. This ensures that the effect runs once when the component mounts and change the state value according to i need.
4.  Map over the allCourses array and show allCourses value like course image , course title, description etc.
5. According to all this step, i initialize 'selectedCourses','remaining','totalCredit', 'totalPrice' state variable using 'useState([])'. All are hold the array of course data.
6. Use 'useEffect' to fetch course data from a data.json and  updates the state with the received data using allCourses value.
7. With this value , handle select course and calculate total price, total credit ,remaining. Giving condition in course name, total credit , remaining for warning toastify notification.
 <br><br>
 This is how to use 'useState' and 'useEffect' to manage state and handle side effect in this course registration project.