import React from 'react';
import Link from "next/link";
import BookCover from "@/components/BookCover";
import {cn} from "@/lib/utils";

const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false }: Book) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52")}>
      <Link href={`/books/${id}}`}>
        <BookCover coverColor={color} coverImage={cover} />
      </Link>
    </li>
  );
};

export default BookCard;