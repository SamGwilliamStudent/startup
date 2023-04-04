# startup
My CS260 Repository

I am excited to learn about web development in this class.

This is a fixed line that I added from GitHub.

Something that I learned from this assignment is that large merge conflicts could potentially be difficult to easily resolve. 
Communication with your team to avoid that would be very useful.

### ELEVATOR PITCH

For my startup project I have decided to create a website that assists users in starting and maintaining good habits. The UI will be simple and intuitive and allow for a daily streak to be tracked or reset if not maintained. It has been said that 21 consistent days of doing something will create a habit, and 90 days of doing something will make it a part of your lifestyle. This web program will allow intuitive tracking that provides a centralized place for new habits to be tracked as you reach for a goal of consistency. Users will be inspired by others on the platform and together they will be able to better their lives.

Key Features
- Creating a new Habit you want to track
- Incrementing or resetting your habit count
- Encouraging other users that are online through a positive notification
- A profile that keeps track of your statistics

## Website Layout Photo
![StartupLayout](https://user-images.githubusercontent.com/112889657/214948931-27d051f4-6edc-4298-8963-298b82fb7e3f.jpeg)

Command to SSH into my server ssh -i ~/Desktop/CS260/Production.pem ubuntu@3.137.42.181

Using the console to debug is very important. I was having issues with my simon project and realized that it was due to the fact that I hadn't connected the .mp3 files to my project which caused an error when they weren't found. I wouldn't have known this had I not used the debugger.


## Midterm Notes
"<div" creates a division element

A CName DNS record type points you to another DNS record

An A DNS record points directly to an IP address

@import will allow you to pull up a google font using CSS

In promises, there is only a catch if reject is called. Resolve’s parameter is trivial, so even if it is false then it still resolves.

Valid JSON strings look like this {“x”:3}. The Key value needs to have double quotes. Undefined doesn’t work as a value. Null works but not undefined.

.class is the class selector in CSS

#id is the ID selector

p would do all the paragraphs in the sheet

JS needs to be within <script> </script> tags. You can link straight to a source, put a function right inline.

"(/A|f/i)" is anything that has an A in it but i makes it incase sensitive. f/ is anything that starts with an f.

Pals Before Marriage. Content, Padding, Margin, Border. Padding element would put space around the content.

Reduce takes an array and takes it down to one value

Map takes an array and maps it to an array of equal size.

Sum takes the sum of values in an array

Filter filters through an array with a specified filter

"<ul" makes an unordered list.

"<li" is a list element

Query Selector all would give all elements

Query selector would just give a single element

Use the "<a" tag to create valid hyperlinks

DOM textContent will set the child text for an element.

Subdomains include the main domain but with extra stuff up front.

JS Objects don’t use any equal sign. Just use a colon. JSON objects and JS objects need that. You don’t need quotes around a key in JS objects.

Chmod +x adds the executable tag to a file.

Ssh secure shell

Sudo admin priviledges

Ls -la lists out contents

Using JavaScript was an interesting experience for me. I had a hard time working with some aspects of my project and found myself jumping into the console to work them out. I learned that JavaScript can be very useful and create awesome functionality when you put a little bit of work into the website. I also learned how difficult it can be to get all 3 technologies working together. (HTML, CSS, JS)

One thing that I learned from using express was the importance of the file structure. I was having a bit of an issue with it and ended up having to rely a lot on the simon project structure so that was a big help. It had a hard time finding the home page. Thankfully it ended up working, but I think the power of using get requests could be super fun to implement in projects going forward.

I thought it was interesting how we can use MongoDB with our projects. I have used relational databases before but haven't used a JSON oriented one like Mongo. I thought it was nice how quickly and easily you can hook things up to your project for long-term storage.

I thought that one interesting thing that I learned from this assignment is how things are encrypted within the database. It makes a lot of sense cause that would be a centralized attack point for a lot of access into people's private information, but if the passwords are hashed then even if someone gains access it isn't too useful to them. 

One interesting thing I liked about WebSockets was how it was built on top of HTTP. Instead of creating a new technology from scratch, they were able to piggy-back off of an existing technology. I thought that the syntax was a little bit confusing but I am going to look a little closer at it to better understand it.

I learned a lot while implementing my service functionality. At first I was a bit confused on what it was but then I made connections between the API's that I was writing in JS for my startup and the ones that I wrote in Java for CS240. Once I understood that a bit better it made a lot more sense. I had some struggles with finding out how to debug but once I did that, I was able to locate the errors that I was experiencing in my program. There were some things that I wasn't able to implement but I look forward to learning how to do that. I thought that using express was very nice, and I learned a lot more about how it works through writing express endpoints. MongoDB is super useful too. I love how it seamlessly stores the information created in my website instead of forcing me to use a relational database. 
