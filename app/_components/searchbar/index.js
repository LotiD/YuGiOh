import React from 'react';

const SearchBar = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Rechercher une carte..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-sky-600 rounded-md bg-slate-800 px-3 py-1 mb-2 text-white mt-2"
        />
    );
};

export default SearchBar;