#!/bin/bash
cd /home/kavia/workspace/code-generation/ui-component-explorer-5783-5792/frontend_main
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

