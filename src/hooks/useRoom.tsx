import React, { useState, useEffect } from 'react';
//import useAuth from './useAuth';
export default function useRoom(roomId: string) {
  //const { user } = useAuth();
  const [title, setTitle] = useState('');
  return { title };
}
