app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(helmet());
app.use(cors());
