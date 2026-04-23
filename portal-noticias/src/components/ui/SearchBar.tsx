import type { FormEvent } from "react";

type SearchBarProps = {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (query: string) => void;
  onSearch: (query: string) => void;
  buttonLabel?: string;
};

export function SearchBar({
  placeholder = "Buscar...",
  defaultValue = "",
  value,
  onValueChange,
  onSearch,
  buttonLabel = "Buscar",
}: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const q = String(fd.get("q") ?? "").trim();
    onSearch(q);
  }

  const controlled = value !== undefined;

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar__icon" aria-hidden>
        🔍
      </span>
      {controlled ? (
        <input
          className="search-bar__input"
          name="q"
          placeholder={placeholder}
          type="search"
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
        />
      ) : (
        <input
          className="search-bar__input"
          defaultValue={defaultValue}
          name="q"
          placeholder={placeholder}
          type="search"
        />
      )}
      <button className="search-bar__btn button secondary" type="submit">
        {buttonLabel}
      </button>
    </form>
  );
}
