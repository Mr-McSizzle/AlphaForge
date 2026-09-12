# AlphaForge

## Vision Document

**Project Name:** AlphaForge  
**Overview:** AlphaForge is a premium, high-performance quantitative strategy and backtesting platform designed for university software engineering assignments. It enables users to express, test, and analyze algorithmic trading strategies seamlessly.  
**Problem it Solves:** Bridges the gap between complex quantitative finance theories and practical software engineering implementation by providing a unified environment for strategy creation, data ingestion, and rigorous backtesting.  
**Target Users:** Students, quantitative finance enthusiasts, and academic researchers seeking a reliable backtesting engine.  
**Vision Statement:** To empower the next generation of quantitative engineers by delivering an intuitive, avant-garde cinematic platform for seamless alpha generation and robust backtesting.  
**Key Features:**
- Automated market data ingestion pipelines
- Alpha expression engine for custom trading rules
- High-fidelity historical backtesting
- Advanced analytics and performance visualization
**Success Metrics:**
- Execution speed of backtests
- User engagement and successful completion of strategies
- Stability and scalability under concurrent loads
**Assumptions/Constraints:**
- Market data is available via external API mock services.
- System designed primarily for educational and simulation purposes.
- Deployment via Docker for local consistency.

## User Stories

### Epic 1: Workspace
1. As a user, I want to create a new workspace so I can organize my strategies.
2. As a user, I want to save my workspace configuration to resume work later.
3. As a user, I want a dark-mode cinematic interface for an immersive experience.
4. As a user, I want to manage multiple isolated projects within my workspace.
5. As an admin, I want to oversee active user workspaces.

### Epic 2: Data Ingestion
6. As a user, I want to import historical CSV data so I can backtest offline.
7. As a user, I want to connect to a live mock API for real-time data simulation.
8. As a user, I want to view data quality metrics (e.g., missing values).
9. As a system, I want to cache frequent data requests in Redis to improve performance.
10. As a user, I want to filter datasets by ticker and date range.

### Epic 3: Alpha Expression Engine
11. As a user, I want to write custom logic in a code editor UI.
12. As a user, I want syntax highlighting for my strategy scripts.
13. As a user, I want to use pre-built technical indicators (SMA, EMA, RSI).
14. As a user, I want to define dynamic position sizing rules.
15. As a user, I want to validate my strategy syntax before execution.

### Epic 4: Backtesting
16. As a user, I want to execute a backtest over a specified historical period.
17. As a user, I want to pause or cancel a long-running backtest.
18. As a user, I want to see a progress bar during backtest execution.
19. As a user, I want to account for transaction costs and slippage.
20. As a user, I want to compare multiple backtest runs side-by-side.

### Epic 5: Analytics
21. As a user, I want to view a comprehensive equity curve chart.
22. As a user, I want to see key performance metrics (Sharpe ratio, max drawdown).
23. As a user, I want to view a trade log of all executed orders.
24. As a user, I want to export my backtest report as a PDF.
25. As a user, I want to visualize portfolio heatmaps and correlations.

## MoSCoW Prioritization

| Feature Category | Description |
|------------------|-------------|
| **Must-have**    | User Authentication, Basic Backtesting Engine, Alpha Expression UI, PostgreSQL DB integration, Redis Caching, Containerized Setup |
| **Should-have**  | Interactive charts (Equity curve), Pre-built technical indicators, Trade logs, Slippage modeling |
| **Could-have**   | PDF Reports Export, Multi-strategy comparison, Live paper trading simulation |
| **Won't-have**   | Real money brokerage integration, High-frequency tick data processing, Machine learning predictive models |

## Quick Start – Local Development

### Prerequisites
- [Docker](https://www.docker.com/) & Docker Compose
- [VS Code](https://code.visualstudio.com/) / Antigravity IDE
- Git

### Running the Application
1. Clone the repository and navigate to the root directory.
2. Run the following command to build and start the containers:
   ```bash
   docker-compose up --build
   ```
3. Access the services:
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:8000
   - **PostgreSQL:** localhost:5432
   - **Redis:** localhost:6379

### Architecture & Tools
- **Frontend:** React (Vite) styled with a premium, high-contrast dark aesthetic.
- **Backend:** FastAPI (Python) for high-performance API endpoints.
- **Database:** PostgreSQL for persistent storage, seeded via `init.sql`.
- **Cache:** Redis for fast data retrieval.
- **Design:** Figma, Draw.io (for architecture diagrams).
- **Workflow:** This project adheres to **GitHub Flow**, utilizing feature branches (e.g., `feat/initial-setup`) merged into `main`.

 ## Software Design

AlphaForge is engineered around a Layered Model-View-Service-Repository architecture, prioritizing high cohesion and loose coupling. By offloading computationally intensive backtesting simulations to an asynchronous Redis task queue, the platform prevents UI blocking and ensures the REST API remains highly responsive under load.

### Architecture Diagram https://app.diagrams.net/#G1hFjhNLtuU6RAQqlUXxim8QGBVBkOCAFc#%7B%22pageId%22%3A%22sYAJIV_2XIXlJZFzMAzr%22%7D

### Design Artifacts
* **Editable Architecture:** https://app.diagrams.net/#G1hFjhNLtuU6RAQqlUXxim8QGBVBkOCAFc#%7B%22pageId%22%3A%22sYAJIV_2XIXlJZFzMAzr%22%7D
* **Interactive Prototype:** (https://www.figma.com/make/0hk5Gt9havspnqxquTfSsn/Design-Dark-Mode-UI?fullscreen=1&t=IHAI1rYxbr01jP3R-1&code-node-id=0-6)
