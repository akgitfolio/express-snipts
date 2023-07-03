app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  headers: ['Content-Type', 'Authorization']
}));
