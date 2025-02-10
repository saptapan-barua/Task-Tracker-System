# Project Name: Task tracker system using AI
This system is a browser-based tool that helps users manage and track tasks efficiently using localStorage. It dynamically adjusts for different months, tracks historical performance, and provides real-time updates. However, it lacks synchronization, multi-user support, and undo functionality. Future plans include fixing bugs and transforming it into a software or mobile application using Python and C++.
<hr>

## Characteristics
1. **Data is stored in local storage**: - The task tracker uses `localStorage` to persist data across browser sessions. This means that the tasks, month, previous record, highest record, and the month of the highest record will remain available even after the browser is closed and reopened. 

2. **The month can be changed**: - Users can change the month by clicking on the pencil icon next to the month name. A prompt will appear, allowing the user to enter a new month name. The system will then update the month and reset the tasks for the new month.

3. **Dynamic creation of day columns**: - According to the selected month, the day's columns will be automatically created. The number of days in the month is determined based on the month name, and the table is dynamically updated to reflect the correct number of days.

4. **Task addition and removal**: - Users can add new tasks by clicking the "Add Task" button. A prompt will appear, allowing the user to enter the task name. Tasks can also be removed by clicking the eraser icon next to the task name.

5. **Task completion tracking**: - Each task has a checkbox for each day of the month. Users can mark tasks as completed by checking the corresponding checkboxes. The total number of completed tasks for each task is displayed in the "Total" column.

6. **Previous month's record**: - The system keeps track of the total number of tasks completed in the previous month. This record is updated whenever the month is changed and is displayed on the page.

7. **Historical records tracking** – The system tracks the highest number of tasks completed in any month. If the total number of tasks completed in the current month exceeds the highest record, the highest record and the month of the highest record are updated.

8. **Real-time updates**: - The total number of tasks completed in the current month is updated in real-time as users check or uncheck the task completion checkboxes. This total is displayed at the bottom of the table. These characteristics make the task tracker system flexible, user-friendly, and capable of persisting data across browser sessions.
<hr>

## Limitations
1. **Leap year**: - In leap years, February won't have 29 days; it remains 28 days.
2. **Responsive**: - The layout may not work properly on small mobile screens.
3. **Month Name Input** - If users mistype the month name, it won't be recognized, and the month might not be displayed properly.
3. **Data Persistence**: - The data is stored in localStorage, so clearing browser storage will erase all tasks.
4. **Cross-Device Sync**: Since it relies on localStorage, tasks won't sync across different devices.
5. **Undo/Redo**: There is no undo/redo functionality for accidental task deletions or changes.
6. **Customization**: Users cannot customize themes, colors, or add additional notes for tasks.
7. **Multi-User Support**: The system is designed for a single user and does not support multiple accounts.
8. **Export/Import**: There is no built-in way to export task data for backup or import from another device.

<hr>

## My Target
In future, If I restart this project then 
1. **Fix bugs**: - Try to fix bugs of this project.
2. **Software or mobile application**: - Using Python and C++ try to modify as a software application. Python and C++ will be used for GUI and performance.