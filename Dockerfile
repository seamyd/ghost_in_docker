FROM ghost

COPY ./config.production.js /var/lib/ghost/config.js

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 2368
CMD ["npm", "start", "--production"]