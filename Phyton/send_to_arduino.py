import serial
import time

# Set up the serial connection (update COM port for your system)
ser = serial.Serial('COM3', 9600, timeout=1)
time.sleep(2)  # Wait for the connection to establish

def send_number_to_arduino(path):
    with open(path, 'r') as file:
        number = file.readline().strip()  # Read the first number from the file
        ser.write(number.encode())  # Send the number to Arduino
        print(f"Sent number: {number}")

if __name__ == "__main__":
    file_path = "number.txt"
    send_number_to_arduino(file_path)

ser.close()
