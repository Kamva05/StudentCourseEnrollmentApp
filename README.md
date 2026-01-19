# StudentCourseEnrollmentApp
Student Course Enrollment App


The enrolled courses state is stored in the App component because multiple pages (Courses and EnrolledCourses) need access to the same data. The state was lifted up to allow sibling components to share and update enrollment information through props. This avoids duplication and ensures consistent data across routes.
