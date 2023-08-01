import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  title: string = "Room List"



  hotelName: string = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 8,
    bookedRooms: 12
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photo: '',
      checkInTime: new Date('11-July-2023'),
      checkOutTime: new Date('12-August-2023'),
      rating: 2.3
    },
    {
      roomNumber: 2,
      roomType: 'Private Suite Room',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 1000,
      photo: '',
      checkInTime: new Date('05-July-2023'),
      checkOutTime: new Date('23-August-2023'),
      rating: 4.5564457777544
    },
    {
      roomNumber: 3,
      roomType: 'Private Delux Suite Room',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 15000,
      photo: '',
      checkInTime: new Date('05-July-2023'),
      checkOutTime: new Date('23-August-2023'),
      rating: 3.7
    }
  ]

  selectedRoom!: RoomList;

  toggle() {
    this.hideRooms = !false;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Delux Suite New",
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 15000,
      photo: 'aaddf',
      checkInTime: new Date('05-July-2023'),
      checkOutTime: new Date('23-August-2023'),
      rating: 6.7
    }

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
