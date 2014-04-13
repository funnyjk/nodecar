int speedPinA=9;
int speedPinB=10;
int motorSpeed = 127;

int pinI1 = 8;
int pinI2 = 11;
int pinI3 = 12;
int pinI4 = 13;

void setup()
{
  pinMode(pinI1, OUTPUT);
  pinMode(pinI2, OUTPUT);
  pinMode(pinI3, OUTPUT);
  pinMode(pinI4, OUTPUT);

  digitalWrite(speedPinA, motorSpeed);
  digitalWrite(speedPinB, motorSpeed);

  digitalWrite(pinI1, LOW);
  digitalWrite(pinI2, LOW);
  digitalWrite(pinI3, LOW);
  digitalWrite(pinI4, LOW);

  Serial.begin(9600);
}

void loop()
{
  char incomingByte = Serial.read();

  if (incomingByte == 'f') {
    digitalWrite(pinI1, HIGH);
    digitalWrite(pinI2, LOW);
  }  
  if (incomingByte == 'b') {
    digitalWrite(pinI1, LOW);
    digitalWrite(pinI2, HIGH);
  }  
  if (incomingByte == 'l') {
    digitalWrite(pinI3, HIGH);
    digitalWrite(pinI4, LOW);
  }  
  if (incomingByte == 'r') {
    digitalWrite(pinI3, LOW);
    digitalWrite(pinI4, HIGH);
  }  
  if (incomingByte == 's') {
    digitalWrite(pinI1, LOW);
    digitalWrite(pinI2, LOW);
    digitalWrite(pinI3, LOW);
    digitalWrite(pinI4, LOW);
  }
}

