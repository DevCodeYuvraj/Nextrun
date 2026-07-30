"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  MdDescription,
  MdEventNote,
  MdForum,
  MdSearch,
  MdSpaceDashboard,
  MdSwapHoriz,
  MdTaskAlt,
} from "react-icons/md";

import { globalSearchItems } from "@/data/globalSearchData";

import styles from "./HeaderSearch.module.css";

const icons = {
  Dashboard: MdSpaceDashboard,
  Finance: MdDescription,
  Management: MdEventNote,
  Productivity: MdTaskAlt,
  Communication: MdForum,
  Activity: MdSwapHoriz,
};

export default function HeaderSearch() {
  const router = useRouter();

  const wrapperRef = useRef(null);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return globalSearchItems
      .filter((item) => {
        const searchable = [
          item.title,
          item.category,
          ...item.keywords,
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      })
      .slice(0, 6);
  }, [search]);

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () =>
      document.removeEventListener("mousedown", handleOutside);
  }, []);

  const navigateTo = (item) => {
    setSearch("");
    setOpen(false);
    setActiveIndex(-1);

    router.push(item.href);
  };

  const handleKeyDown = (event) => {
    if (!open) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setActiveIndex((previous) =>
        Math.min(previous + 1, results.length - 1)
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setActiveIndex((previous) =>
        Math.max(previous - 1, 0)
      );
    }

    if (
      event.key === "Enter" &&
      activeIndex >= 0 &&
      results[activeIndex]
    ) {
      event.preventDefault();
      navigateTo(results[activeIndex]);
    }

    if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
    >
      <div
        className={`${styles.search} ${
          open && search ? styles.focused : ""
        }`}
      >
        <MdSearch size={20} />

        <input
          type="text"
          value={search}
          placeholder="Search here..."
          onFocus={() => {
            if (search.trim()) {
              setOpen(true);
            }
          }}
          onChange={(event) => {
            setSearch(event.target.value);
            setOpen(Boolean(event.target.value.trim()));
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      {open && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <span>Search Results</span>

            <small>{results.length} found</small>
          </div>

          {results.length > 0 ? (
            <div className={styles.results}>
              {results.map((item, index) => {
                const Icon =
                  icons[item.category] || MdSearch;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.result} ${
                      activeIndex === index
                        ? styles.activeResult
                        : ""
                    }`}
                    onMouseEnter={() =>
                      setActiveIndex(index)
                    }
                    onClick={() => navigateTo(item)}
                  >
                    <span className={styles.resultIcon}>
                      <Icon />
                    </span>

                    <span className={styles.resultText}>
                      <strong>{item.title}</strong>
                      <small>{item.category}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className={styles.empty}>
              <MdSearch />

              <strong>No results found</strong>

              <span>
                Try searching for another page.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}