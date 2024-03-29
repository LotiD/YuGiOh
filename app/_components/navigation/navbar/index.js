"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
  return(
    <div className="w-full h-20 sticky top-0" style={{
        backgroundColor: '#00317750' 
    }}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
        <navbar>
          <ul className="md:flex gap-x-6 text-white text-right">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/repertoire">Repertoire</Link>
            </li>
            <li>
              <Link href="/actus">Actus</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </navbar>
        </div>
      </div>
    </div>
  )
};