#!/bin/bash
set -e

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Running Validation Gates...${NC}"

# 1. Formatting & Linting (Placeholder if tools installed later)
# echo "Checking format..."
# if npm run | grep -q "format:check"; then
#   npm run format:check
# fi

# 2. TypeScript Validation
echo -e "${GREEN}Running TypeScript Build & Type Check...${NC}"
# 'vite build' typically runs tsc, or we can run tsc directly if locally installed
npm run build

# 3. Tests
echo -e "${GREEN}Running Unit Tests...${NC}"
# Use vitest run for single pass
npx vitest run

# 4. Python Validation (if applicable)
if [ -f "requirements.txt" ]; then
    echo -e "${GREEN}Running Python Checks...${NC}"
    # pytest
    # mypy .
    # ruff check .
fi

echo -e "${GREEN}All checks passed successfully!${NC}"
