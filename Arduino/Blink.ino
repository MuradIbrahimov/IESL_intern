#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

const int ledPin = 3;   // Pin for the LED
char receivedChar;      // Variable to store incoming serial data

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // Initialize Serial Communication
  Serial.begin(9600);

  // Initialize the display
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;); // Don't proceed, loop forever
  }

  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  display.setCursor(0, 0);
  display.display();
}

void loop() {
  // Check if there is incoming serial data
  if (Serial.available() > 0) {
    receivedChar = Serial.read();  // Read the incoming data

    // Check if the received character is 'M' (Male)
    if (receivedChar == 'M') {
      digitalWrite(ledPin, HIGH);  // Turn on the LED
    } else if (receivedChar == 'F') {
      digitalWrite(ledPin, LOW);   // Turn off the LED
    }
  }
}
