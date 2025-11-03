#!/usr/bin/env bash
set -euo pipefail
ROLE=${1:-both}

sudo apt-get update -y
sudo apt-get install -y curl git

if [[ "$ROLE" == "build" || "$ROLE" == "both" ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs build-essential
fi

if [[ "$ROLE" == "web" || "$ROLE" == "both" ]]; then
  sudo apt-get install -y nginx
  sudo systemctl enable nginx
  sudo systemctl start nginx
fi

echo "Setup completed for role=$ROLE"
