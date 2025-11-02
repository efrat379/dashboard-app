"use client";

import { useMemo, useState } from 'react';
import styles from '../css/AquaTable.module.css';

const AquaTable = ({ headers, data, uniqueKey,onRowClick }) => {
    
    const [activeRow, setActiveRow] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerms, setSearchTerms] = useState({});
    const [checkedRows, setCheckedRows] = useState(new Set());

    const itemsPerPage = 10;

    // Tambahkan header untuk kolom checkbox
    const allHeaders = [
        { key: 'checkbox', label: '#', searchable: false },
        ...headers
    ];

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleSearch = (columnKey, value) => {
        setSearchTerms((prevTerms) => ({
            ...prevTerms,
            [columnKey]: value,
        }));
        setCurrentPage(1);
    };

    const filteredData = useMemo(() => {
        let result = data;
        Object.keys(searchTerms).forEach((key) => {
            const searchTerm = searchTerms[key].toLowerCase();
            if (searchTerm) {
                result = result.filter((item) =>
                    String(item[key]).toLowerCase().includes(searchTerm));
            }
        });
        return result;
    }, [data, searchTerms]);

    const handleCheck = (rowId) => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(rowId)) {
            newCheckedRows.delete(rowId);
        } else {
            newCheckedRows.add(rowId);
        }
        setCheckedRows(newCheckedRows);
    };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    return (
        <div className={styles.tableWrapper}>
            <div className={styles.tableContainer}>
                <div className={`${styles.headerRow} ${styles.searchableHeader}`}>
                    {allHeaders.map((header) => (
                        <div key={header.key} className={styles.columnHeader}>
                            {header.searchable ? (
                                <>
                                    <span className={styles.headerLabel}>{header.label}</span>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className={styles.searchInput}
                                        onChange={(e) => handleSearch(header.key, e.target.value)}
                                    />
                                </>
                            ) : (
                                <span className={styles.headerLabel}>{header.label}</span>
                            )}
                        </div>
                    ))}
                </div>
        
                <div className={styles.tableBody}>
                    {currentData.map((row) => (
                        <div
                            key={row[uniqueKey]}
                            className={`${styles.tableRow} ${activeRow === row[uniqueKey] ? styles.active : ''}`}
                            onClick={() => onRowClick(row)} // Panggil fungsi navigasi
                        >
                            {allHeaders.map((header) => (
                                <div key={header.key} className={styles.cell}>
                                    {header.key === 'checkbox' ? (
                                        <input
                                            type="checkbox"
                                            checked={checkedRows.has(row[uniqueKey])} 
                                            onChange={() => handleCheck(row[uniqueKey])} 
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    ) : (
                                        <span>{row[header.key]}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span className={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default AquaTable;