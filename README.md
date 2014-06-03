# NodeCar
Control a Car with Node.JS
***
## Command Language:
9 Digit serial command structure  
000000000#
### Digits
1. First Digit     
	0 - Movement  
	1 - Other Commands
2. Second Digit  
	1. Movement   
		0 - Stop  
		1 - Forward  
		2 - Backward  
	2. Other
3. Third Digit
	1. Movement
		0 - Stop  
		1 - Right  
		2 - Left  
	2. Other
4. Fourth, Fifth & Sixth Digit
	1. Movement - Forward/Backward Speed  
	2. Other
5. Seventh, Eight & Ninth Digit
	1. Movement - Right/Left Speed