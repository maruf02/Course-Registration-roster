# Questions Answer

# Ques-1: Add at least 3 Project features

# Ans:

Here are main 3 Feature are shown:

1. Course-Details: This is Software learning project. In this project you can see all types of project name and project image. You can select project individually by click the select button. Your select course name show in the right side. Don't worry if you select same course many time unfortunately it's won't happen or not add your selected course.
   our project will manage it and show warning message when you select many time same course.

2. Course-Credit: Course credit is another feature of our project. Actually course credit is how much you need to finish that course. You see all project credit hour include the course. when you select course, course credit will added automatically in the total credit our section. you can select total 20 hour from our project. If your selected course credit hour is greater than 20 hour, don't worry our system can't you add greater than 20 hour that time it's give warning message.

3. Corse-Price: You can see Total price on right side of our project. how many course you select that time automatically show you total price of all course.because of that it's easier to select course depend on your budget.

More feature will coming soon, Stay with us and learn to explore more.
Thanks

# Ques-2: Discuss how you managed the state in your assignment project.

# Ans:

State: In react usestate is a build in hook that allow us to give function that can we manage state. Usestate is use when need to do something event. For this project there are need four sate to handle this project. One: firstly fetch data from the api and that show these data, for doing this we need state of handle after showing data when it click button that time that button handle a event that return all object after that we can use these object and sent data another state.for this work we need state in this project we name it cartDetails. this state get data from every card and sent data to showing state. Secondly: we need to receive these data from the first state then we handle a event that show needed data after receiving. so we use state that store ans pass these data named as cartCredit. it's receive all credit value and sum all credit value and show sum of credit from first state. Thirdly: we need to receive data of price value from every card and then we show the sum of price value. fot that we use state name as cartPrice.
and al last we need to check total hour that are sum of credit because our project give highest 20hr for client. for this receive data and check it's not big than 20 we use state that name is CartHour. this state receive data and check total our isn't big than 20, if it's big then 20 then this state return a toast and cant add any card. Also in First state we doing another thing that is if user click one card more than one time that time cartDetails state function prevent it and show a toast that's why user can't select a card more than on. That's all about the state of this project or process of managing of state for this project. Thanks.

# Ends
