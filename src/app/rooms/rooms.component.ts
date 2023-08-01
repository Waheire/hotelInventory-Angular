import { Component } from '@angular/core';
import { Room, RoomLists } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName: string = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 12
  }

  roomList: RoomLists[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: '',
      checkInTime: new Date('11-July-2023'),
      checkOutTime: new Date('12-August-2023')
    },
    {
      roomNumber: 2,
      roomType: 'Private Suite Room',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 1000,
      photo: '',
      checkInTime: new Date('05-July-2023'),
      checkOutTime: new Date('23-August-2023')
    },
    {
      roomNumber: 3,
      roomType: 'Private Delux Suite Room',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 15000,
      photo: '',
      checkInTime: new Date('05-July-2023'),
      checkOutTime: new Date('23-August-2023')
    }
  ]

  toggle() {
    this.hideRooms = !false;
  }

}
