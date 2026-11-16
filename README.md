# Weekly Menu (iPad kitchen display)

Statisk HTML/CSS/JS-sida för veckomeny med 6-veckorsrotation (byts automatiskt varje måndag).

Rotationen styrs av `CYCLE_ANCHOR_MONDAY` i `script.js`, som anger måndagen för menyvecka 1. Ankaret är 26 oktober 2026, så 16–22 november 2026 visas menyvecka 4, följt av menyvecka 5 och 6.

Hela rotationen finns på `full-menu.html`, via länken ”Visa hela menyn” under veckans meny. Den aktiva menyveckan markeras automatiskt.

## Lokal körning med Docker

```bash
docker build -t weekly-menu-ipad .
docker run --rm -p 8080:80 weekly-menu-ipad
```

Öppna: `http://localhost:8080`

## GitHub Actions -> GHCR

Workflow finns i `.github/workflows/docker-publish.yml`.

Vid push till `main` byggs och pushas image till:

- `ghcr.io/<owner>/weekly-menu-ipad:latest`
- `ghcr.io/<owner>/weekly-menu-ipad:sha-...`

### Krav

- Repo på GitHub
- GitHub Packages aktiverat för kontot/org
- Workflow permissions tillåter `packages: write` (redan satt i workflow)

## iPad mini i kök (tips)

- Öppna sidan i Safari och välj **Add to Home Screen / Lägg till på hemskärmen**.
- Starta sidan från hemskärmsikonen för att köra i web-app-läge (utan Safari UI/url-bar).
- Lås skärmen i Guided Access om den ska stå permanent.
- Om du hostar på LAN: använd fast lokal URL, t.ex. `http://menu.local`.
