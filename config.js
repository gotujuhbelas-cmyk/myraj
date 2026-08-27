<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyRAJ Admin - Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
            min-height: 100vh;
            color: #fff;
        }

        /* Navbar */
        .navbar {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .navbar-brand { display: flex; align-items: center; gap: 20px; }
        .navbar-brand img { height: 45px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); }
        .navbar-brand h2 {
            font-size: 24px;
            background: linear-gradient(135deg, #4ade80, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .navbar-brand span { font-size: 12px; color: rgba(255,255,255,0.6); display: block; }
        .nav-links { display: flex; gap: 10px; }
        .nav-links a, .nav-links button {
            color: white;
            text-decoration: none;
            padding: 10px 18px;
            border-radius: 10px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
        .nav-links a:hover, .nav-links button:hover {
            background: rgba(74, 222, 128, 0.2);
            border-color: #4ade80;
        }

        /* Container */
        .container { max-width: 1600px; margin: 40px auto; padding: 0 40px; }

        /* Tabs */
        .tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }
        .tab-btn {
            padding: 12px 24px;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.05);
            color: rgba(255,255,255,0.7);
            border-radius: 12px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .tab-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .tab-btn.active {
            background: linear-gradient(135deg, #4ade80, #3b82f6);
            color: white;
            border-color: transparent;
            box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
        }

        /* Tab Content */
        .tab-content { display: none; animation: fadeIn 0.5s ease; }
        .tab-content.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(20px);
            padding: 25px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,0.1);
            position: relative;
            overflow: hidden;
            transition: all 0.3s;
        }
        .stat-card:hover { transform: translateY(-5px); border-color: rgba(74,222,128,0.3); }
        .stat-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 4px;
            background: linear-gradient(90deg, #4ade80, #3b82f6);
        }
        .stat-card h3 { color: rgba(255,255,255,0.7); font-size: 13px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .stat-card .value { font-size: 32px; font-weight: 700; }
        .stat-card i { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 50px; opacity: 0.1; }

        /* Section */
        .section {
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(20px);
            padding: 30px;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
            margin-bottom: 25px;
        }
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(74,222,128,0.3);
            flex-wrap: wrap;
            gap: 15px;
        }
        .section-header h3 { color: #fff; font-size: 20px; display: flex; align-items: center; gap: 10px; }
        .section-header h3 i { color: #4ade80; }

        /* Buttons */
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }
        .btn-primary { background: linear-gradient(135deg, #4ade80, #3b82f6); color: white; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(74,222,128,0.4); }
        .btn-success { background: linear-gradient(135deg, #10b981, #059669); color: white; }
        .btn-success:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(16,185,129,0.4); }
        .btn-warning { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }
        .btn-warning:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(245,158,11,0.4); }
        .btn-danger { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; }
        .btn-sm { padding: 6px 12px; font-size: 12px; }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Table */
        .table-container { overflow-x: auto; border-radius: 12px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 14px 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); }
        th { background: rgba(255,255,255,0.05); font-weight: 600; color: rgba(255,255,255,0.8); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        td { color: rgba(255,255,255,0.9); font-size: 14px; }
        tr:hover { background: rgba(74,222,128,0.05); }

        /* Badge */
        .badge { padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-block; }
        .badge-pending { background: rgba(251,191,36,0.2); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); }
        .badge-invoiced { background: rgba(59,130,246,0.2); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }
        .badge-paid { background: rgba(74,222,128,0.2); color: #4ade80; border: 1px solid rgba(74,222,128,0.3); }

        /* Modal */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(5px);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        .modal-overlay.active { display: flex; }
        .modal {
            background: linear-gradient(135deg, #1e1b4b, #312e81);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 30px;
            max-width: 600px;
            width: 90%;
            max-height: 85vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .modal-header h3 { color: #fff; font-size: 20px; }
        .modal-close { background: none; border: none; color: rgba(255,255,255,0.6); font-size: 24px; cursor: pointer; }
        .modal-close:hover { color: #fff; }

        /* Form */
        .form-group { margin-bottom: 18px; }
        .form-group label { display: block; color: rgba(255,255,255,0.8); margin-bottom: 8px; font-size: 13px; font-weight: 500; }
        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 10px;
            color: #fff;
            font-size: 14px;
            font-family: inherit;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
            outline: none;
            border-color: #4ade80;
            background: rgba(255,255,255,0.08);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }

        /* Alert */
        .alert {
            padding: 15px 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            animation: slideDown 0.3s ease;
        }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .alert-success { background: rgba(74,222,128,0.15); color: #4ade80; border: 1px solid rgba(74,222,128,0.3); }
        .alert-error { background: rgba(239,68,68,0.15); color: #ef4444; border: 1px solid rgba(239,68,68,0.3); }
        .alert-info { background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }

        /* Loading */
        .loading { text-align: center; padding: 50px; color: rgba(255,255,255,0.7); }
        .loading i { font-size: 40px; animation: spin 1s linear infinite; color: #4ade80; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Responsive */
        @media (max-width: 768px) {
            .navbar { padding: 15px 20px; flex-direction: column; gap: 15px; }
            .container { padding: 0 20px; }
            .stats-grid { grid-template-columns: 1fr; }
            .form-row { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <div class="navbar">
        <div class="navbar-brand">
            <img src="logo-raj.png" alt="MyRAJ" onerror="this.style.display='none'">
            <div>
                <h2>MyRAJ</h2>
                <span>Smart Waste & Accounting</span>
            </div>
        </div>
        <div class="nav-links">
            <a href="index.html"><i class="fa-solid fa-home"></i> Portal</a>
        </div>
    </div>

    <div class="container">
        <!-- Alert Container -->
        <div id="alertContainer"></div>

        <!-- Tabs -->
        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('dashboard')">
                <i class="fa-solid fa-chart-pie"></i> Dashboard
            </button>
            <button class="tab-btn" onclick="switchTab('ritase')">
                <i class="fa-solid fa-truck-moving"></i> Data Ritase
            </button>
            <button class="tab-btn" onclick="switchTab('clients')">
                <i class="fa-solid fa-users"></i> Client
            </button>
            <button class="tab-btn" onclick="switchTab('invoices')">
                <i class="fa-solid fa-file-invoice-dollar"></i> Invoice
            </button>
        </div>

        <!-- TAB: DASHBOARD -->
        <div id="tab-dashboard" class="tab-content active">
            <div class="stats-grid">
                <div class="stat-card">
                    <i class="fa-solid fa-recycle"></i>
                    <h3>Total Ritase</h3>
                    <div class="value" id="statRitase">-</div>
                </div>
                <div class="stat-card">
                    <i class="fa-solid fa-weight-hanging"></i>
                    <h3>Total Sampah</h3>
                    <div class="value" id="statBerat">-</div>
                </div>
                <div class="stat-card">
                    <i class="fa-solid fa-leaf"></i>
                    <h3>Sudah Diolah</h3>
                    <div class="value" id="statDiolah">-</div>
                </div>
                <div class="stat-card">
                    <i class="fa-solid fa-users"></i>
                    <h3>Client Aktif</h3>
                    <div class="value" id="statClient">-</div>
                </div>
                <div class="stat-card">
                    <i class="fa-solid fa-file-invoice"></i>
                    <h3>Invoice Pending</h3>
                    <div class="value" id="statPending">-</div>
                </div>
                <div class="stat-card">
                    <i class="fa-solid fa-coins"></i>
                    <h3>Total Piutang</h3>
                    <div class="value" id="statPiutang">-</div>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h3><i class="fa-solid fa-bolt"></i> Aksi Cepat</h3>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <button class="btn btn-primary" onclick="syncFromFirebase()">
                        <i class="fa-solid fa-sync"></i> Sync dari Ecotrack
                    </button>
                    <button class="btn btn-success" onclick="openModalInvoice()">
                        <i class="fa-solid fa-plus"></i> Buat Invoice
                    </button>
                    <button class="btn btn-warning" onclick="switchTab('clients')">
                        <i class="fa-solid fa-user-plus"></i> Tambah Client
                    </button>
                </div>
            </div>
        </div>

        <!-- TAB: RITASE -->
        <div id="tab-ritase" class="tab-content">
            <div class="section">
                <div class="section-header">
                    <h3><i class="fa-solid fa-truck-moving"></i> Data Ritase dari Ecotrack</h3>
                    <button class="btn btn-primary" onclick="syncFromFirebase()">
                        <i class="fa-solid fa-sync"></i> Sync Ulang
                    </button>
                </div>
                <div id="loadingRitase" class="loading">
                    <i class="fa-solid fa-spinner"></i>
                    <p style="margin-top: 15px;">Memuat data...</p>
                </div>
                <div class="table-container" id="tableRitaseContainer" style="display:none;">
                    <table>
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Client</th>
                                <th>Room</th>
                                <th>Jenis</th>
                                <th>Berat</th>
                                <th>Diolah</th>
                                <th>Residu</th>
                                <th>Petugas</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyRitase"></tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- TAB: CLIENTS -->
        <div id="tab-clients" class="tab-content">
            <div class="section">
                <div class="section-header">
                    <h3><i class="fa-solid fa-users"></i> Manajemen Client</h3>
                    <button class="btn btn-success" onclick="openModalClient()">
                        <i class="fa-solid fa-plus"></i> Tambah Client
                    </button>
                </div>
                <div id="loadingClients" class="loading">
                    <i class="fa-solid fa-spinner"></i>
                    <p style="margin-top: 15px;">Memuat data client...</p>
                </div>
                <div class="table-container" id="tableClientsContainer" style="display:none;">
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Tipe</th>
                                <th>Tarif/Ritase</th>
                                <th>Retribusi/Bulan</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyClients"></tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- TAB: INVOICES -->
        <div id="tab-invoices" class="tab-content">
            <div class="section">
                <div class="section-header">
                    <h3><i class="fa-solid fa-file-invoice-dollar"></i> Daftar Invoice</h3>
                    <button class="btn btn-success" onclick="openModalInvoice()">
                        <i class="fa-solid fa-plus"></i> Buat Invoice Baru
                    </button>
                </div>
                <div id="loadingInvoices" class="loading">
                    <i class="fa-solid fa-spinner"></i>
                    <p style="margin-top: 15px;">Memuat invoice...</p>
                </div>
                <div class="table-container" id="tableInvoicesContainer" style="display:none;">
                    <table>
                        <thead>
                            <tr>
                                <th>No. Invoice</th>
                                <th>Client</th>
                                <th>Tanggal</th>
                                <th>Periode</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyInvoices"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL: Tambah Client -->
    <div class="modal-overlay" id="modalClient">
        <div class="modal">
            <div class="modal-header">
                <h3><i class="fa-solid fa-user-plus"></i> Tambah Client Baru</h3>
                <button class="modal-close" onclick="closeModal('modalClient')">&times;</button>
            </div>
            <form id="formClient" onsubmit="saveClient(event)">
                <div class="form-group">
                    <label>Nama Client *</label>
                    <input type="text" id="clientName" required placeholder="Contoh: The Hood">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Tipe</label>
                        <select id="clientType">
                            <option value="Restoran">Restoran</option>
                            <option value="Rumah">Rumah</option>
                            <option value="Kantor">Kantor</option>
                            <option value="Pabrik">Pabrik</option>
                            <option value="Lainnya">Lainnya</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>No. Telepon</label>
                        <input type="text" id="clientPhone" placeholder="08xxx">
                    </div>
                </div>
                <div class="form-group">
                    <label>Alamat</label>
                    <textarea id="clientAddress" rows="2"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Tarif per Ritase (Rp) *</label>
                        <input type="number" id="clientTarif" value="15000" required>
                    </div>
                    <div class="form-group">
                        <label>Retribusi Bulanan (Rp) *</label>
                        <input type="number" id="clientRetribusi" value="300000" required>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button type="button" class="btn" style="background: rgba(255,255,255,0.1); color: white;" onclick="closeModal('modalClient')">Batal</button>
                    <button type="submit" class="btn btn-success"><i class="fa-solid fa-save"></i> Simpan</button>
                </div>
            </form>
        </div>
    </div>

    <!-- MODAL: Buat Invoice -->
    <div class="modal-overlay" id="modalInvoice">
        <div class="modal">
            <div class="modal-header">
                <h3><i class="fa-solid fa-file-invoice"></i> Buat Invoice Baru</h3>
                <button class="modal-close" onclick="closeModal('modalInvoice')">&times;</button>
            </div>
            <form id="formInvoice" onsubmit="saveInvoice(event)">
                <div class="form-row">
                    <div class="form-group">
                        <label>Client *</label>
                        <select id="invoiceClient" required></select>
                    </div>
                    <div class="form-group">
                        <label>Periode *</label>
                        <input type="month" id="invoicePeriod" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Jumlah Ritase *</label>
                        <input type="number" id="invoiceVisits" required min="1" onchange="calcInvoiceTotal()">
                    </div>
                    <div class="form-group">
                        <label>Total Berat (kg)</label>
                        <input type="number" id="invoiceWeight" min="0" value="0">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Tarif per Ritase (Rp)</label>
                        <input type="number" id="invoiceTarif" readonly>
                    </div>
                    <div class="form-group">
                        <label>Retribusi (Rp)</label>
                        <input type="number" id="invoiceRetribusi" readonly>
                    </div>
                </div>
                <div class="form-group">
                    <label style="font-size: 16px; color: #4ade80;">
                        <strong>Total Tagihan: <span id="invoiceTotalDisplay">Rp 0</span></strong>
                    </label>
                    <input type="hidden" id="invoiceTotal">
                </div>
                <div class="form-group">
                    <label>Catatan</label>
                    <textarea id="invoiceNotes" rows="2"></textarea>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button type="button" class="btn" style="background: rgba(255,255,255,0.1); color: white;" onclick="closeModal('modalInvoice')">Batal</button>
                    <button type="submit" class="btn btn-success"><i class="fa-solid fa-save"></i> Simpan & Buat Jurnal</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Supabase SDK -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <!-- Firebase SDK -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
        import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

        // ===== KONFIGURASI =====
        const SUPABASE_URL = 'https://givsgpujpmegvnrnyhzp.supabase.co';
        const SUPABASE_KEY = 'sb_publishable_l-rigo5p2FGRs7wManpDZw_os9IHUFE';
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        const firebaseConfig = {
            apiKey: "AIzaSyCd70zeLsmPYBHH1UdKkp4dlrKr57P73yk",
            authDomain: "ecotrack-184c2.firebaseapp.com",
            projectId: "ecotrack-184c2",
            storageBucket: "ecotrack-184c2.firebasestorage.app",
            messagingSenderId: "703447241523",
            appId: "1:703447241523:web:0841c9817537b0aa82a446",
            measurementId: "G-4ZTDBCGGRW"
        };
        const fbApp = initializeApp(firebaseConfig);
        const fbDb = getFirestore(fbApp);

        // ===== GLOBAL STATE =====
        let allClients = [];
        let allRitase = [];

        // ===== TAB SWITCHING =====
        window.switchTab = function(tabName) {
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('tab-' + tabName).classList.add('active');
            event.target.closest('.tab-btn').classList.add('active');

            if (tabName === 'dashboard') loadDashboard();
            if (tabName === 'ritase') loadRitase();
            if (tabName === 'clients') loadClients();
            if (tabName === 'invoices') loadInvoices();
        };

        // ===== MODAL =====
        window.openModalClient = function() { document.getElementById('modalClient').classList.add('active'); };
        window.openModalInvoice = function() {
            populateClientSelect();
            document.getElementById('invoicePeriod').value = new Date().toISOString().slice(0, 7);
            document.getElementById('modalInvoice').classList.add('active');
        };
        window.closeModal = function(id) { document.getElementById(id).classList.remove('active'); };

        // ===== ALERT =====
        function showAlert(message, type = 'info') {
            const container = document.getElementById('alertContainer');
            const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
            container.innerHTML = `<div class="alert alert-${type}"><i class="fa-solid fa-${icon}"></i> ${message}</div>`;
            setTimeout(() => { container.innerHTML = ''; }, 5000);
        }

        // ===== LOAD DASHBOARD =====
        async function loadDashboard() {
            try {
                const { data: ritase } = await supabase.from('waste_collections').select('*');
                const { data: clients } = await supabase.from('clients').select('*').eq('is_active', true);
                const { data: invoices } = await supabase.from('invoices').select('*');

                const totalRitase = ritase ? ritase.length : 0;
                const totalBerat = ritase ? ritase.reduce((s, r) => s + (r.berat_total || 0), 0) : 0;
                const totalDiolah = ritase ? ritase.reduce((s, r) => s + (r.diolah || 0), 0) : 0;
                const totalClient = clients ? clients.length : 0;
                const pendingInvoices = invoices ? invoices.filter(i => i.status === 'UNPAID').length : 0;
                const totalPiutang = invoices ? invoices.filter(i => i.status === 'UNPAID').reduce((s, i) => s + i.total_amount, 0) : 0;

                document.getElementById('statRitase').textContent = totalRitase;
                document.getElementById('statBerat').textContent = totalBerat.toLocaleString('id-ID') + ' kg';
                document.getElementById('statDiolah').textContent = totalDiolah.toLocaleString('id-ID') + ' kg';
                document.getElementById('statClient').textContent = totalClient;
                document.getElementById('statPending').textContent = pendingInvoices;
                document.getElementById('statPiutang').textContent = formatRupiah(totalPiutang);
            } catch (e) { console.error(e); }
        }

        // ===== SYNC DARI FIREBASE =====
        window.syncFromFirebase = async function() {
            showAlert('Sedang sinkronisasi data dari Ecotrack...', 'info');
            try {
                const q = query(collection(fbDb, "sampah"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                let synced = 0;

                for (const doc of snapshot.docs) {
                    const data = doc.data();
                    const firebaseId = doc.id;

                    // Cek apakah sudah ada
                    const { data: existing } = await supabase
                        .from('waste_collections')
                        .select('id')
                        .eq('firebase_doc_id', firebaseId)
                        .single();

                    if (!existing) {
                        // Cari client by name
                        let clientId = null;
                        if (data.client && data.client !== '-') {
                            const { data: clientData } = await supabase
                                .from('clients')
                                .select('id')
                                .eq('name', data.client)
                                .single();
                            clientId = clientData?.id || null;
                        }

                        await supabase.from('waste_collections').insert({
                            firebase_doc_id: firebaseId,
                            no_surat: data.noSurat || null,
                            client_id: clientId,
                            collection_date: data.createdAt ? new Date(data.createdAt.seconds * 1000).toISOString() : null,
                            berat_total: data.berat || 0,
                            diolah: data.diolah || 0,
                            residu: data.residu || 0,
                            jenis: data.jenis || null,
                            petugas: data.petugas || null,
                            created_by: data.createdBy || null,
                            catatan: data.catatan || null,
                            status_invoice: 'PENDING'
                        });
                        synced++;
                    }
                }

                showAlert(`Sinkronisasi berhasil! ${synced} data baru ditambahkan.`, 'success');
                loadDashboard();
                loadRitase();
            } catch (e) {
                console.error(e);
                showAlert('Gagal sinkronisasi: ' + e.message, 'error');
            }
        };

        // ===== LOAD RITASE =====
        async function loadRitase() {
            document.getElementById('loadingRitase').style.display = 'block';
            document.getElementById('tableRitaseContainer').style.display = 'none';

            try {
                const { data, error } = await supabase
                    .from('waste_collections')
                    .select('*, clients(name)')
                    .order('collection_date', { ascending: false });

                document.getElementById('loadingRitase').style.display = 'none';

                if (error) throw error;

                if (!data || data.length === 0) {
                    document.getElementById('tableRitaseContainer').style.display = 'block';
                    document.getElementById('tbodyRitase').innerHTML = '<tr><td colspan="8" style="text-align:center;padding:40px;">Belum ada data. Klik "Sync dari Ecotrack" untuk menarik data.</td></tr>';
                    return;
                }

                document.getElementById('tableRitaseContainer').style.display = 'block';
                const tbody = document.getElementById('tbodyRitase');
                tbody.innerHTML = '';

                data.forEach(item => {
                    const tr = document.createElement('tr');
                    const tgl = item.collection_date ? new Date(item.collection_date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : '-';
                    tr.innerHTML = `
                        <td>${tgl}</td>
                        <td><strong>${item.clients?.name || '-'}</strong></td>
                        <td>${item.clients?.name || '-'}</td>
                        <td>${item.jenis || '-'}</td>
                        <td>${(item.berat_total || 0).toLocaleString('id-ID')} kg</td>
                        <td>${(item.diolah || 0).toLocaleString('id-ID')} kg</td>
                        <td>${(item.residu || 0).toLocaleString('id-ID')} kg</td>
                        <td>${item.petugas || '-'}</td>
                    `;
                    tbody.appendChild(tr);
                });
            } catch (e) {
                console.error(e);
                document.getElementById('loadingRitase').style.display = 'none';
                showAlert('Gagal memuat data ritase: ' + e.message, 'error');
            }
        }

        // ===== LOAD CLIENTS =====
        async function loadClients() {
            document.getElementById('loadingClients').style.display = 'block';
            document.getElementById('tableClientsContainer').style.display = 'none';

            try {
                const { data, error } = await supabase
                    .from('clients')
                    .select('*')
                    .order('name');

                document.getElementById('loadingClients').style.display = 'none';

                if (error) throw error;
                allClients = data || [];

                if (allClients.length === 0) {
                    document.getElementById('tableClientsContainer').style.display = 'block';
                    document.getElementById('tbodyClients').innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;">Belum ada client.</td></tr>';
                    return;
                }

                document.getElementById('tableClientsContainer').style.display = 'block';
                const tbody = document.getElementById('tbodyClients');
                tbody.innerHTML = '';

                allClients.forEach(c => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><strong>${c.name}</strong></td>
                        <td>${c.type || '-'}</td>
                        <td>${formatRupiah(c.tariff_per_visit)}</td>
                        <td>${formatRupiah(c.monthly_retribution)}</td>
                        <td><span class="badge ${c.is_active ? 'badge-paid' : 'badge-pending'}">${c.is_active ? 'Aktif' : 'Nonaktif'}</span></td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="deleteClient('${c.id}')"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            } catch (e) {
                console.error(e);
                document.getElementById('loadingClients').style.display = 'none';
                showAlert('Gagal memuat client: ' + e.message, 'error');
            }
        }

        // ===== SAVE CLIENT =====
        window.saveClient = async function(e) {
            e.preventDefault();
            const data = {
                name: document.getElementById('clientName').value,
                type: document.getElementById('clientType').value,
                phone: document.getElementById('clientPhone').value,
                address: document.getElementById('clientAddress').value,
                tariff_per_visit: parseFloat(document.getElementById('clientTarif').value),
                monthly_retribution: parseFloat(document.getElementById('clientRetribusi').value),
                is_active: true
            };

            try {
                const { error } = await supabase.from('clients').insert(data);
                if (error) throw error;
                showAlert('Client berhasil ditambahkan!', 'success');
                closeModal('modalClient');
                document.getElementById('formClient').reset();
                loadClients();
            } catch (e) {
                showAlert('Gagal menyimpan: ' + e.message, 'error');
            }
        };

        // ===== DELETE CLIENT =====
        window.deleteClient = async function(id) {
            if (!confirm('Yakin hapus client ini?')) return;
            try {
                const { error } = await supabase.from('clients').delete().eq('id', id);
                if (error) throw error;
                showAlert('Client dihapus.', 'success');
                loadClients();
            } catch (e) {
                showAlert('Gagal menghapus: ' + e.message, 'error');
            }
        };

        // ===== POPULATE CLIENT SELECT =====
        function populateClientSelect() {
            const select = document.getElementById('invoiceClient');
            select.innerHTML = '<option value="">-- Pilih Client --</option>';
            allClients.forEach(c => {
                select.innerHTML += `<option value="${c.id}" data-tarif="${c.tariff_per_visit}" data-retribusi="${c.monthly_retribution}">${c.name}</option>`;
            });

            select.onchange = function() {
                const opt = select.options[select.selectedIndex];
                document.getElementById('invoiceTarif').value = opt.dataset.tarif || 0;
                document.getElementById('invoiceRetribusi').value = opt.dataset.retribusi || 0;
                calcInvoiceTotal();
            };
        }

        // ===== CALC INVOICE TOTAL =====
        window.calcInvoiceTotal = function() {
            const visits = parseFloat(document.getElementById('invoiceVisits').value) || 0;
            const tarif = parseFloat(document.getElementById('invoiceTarif').value) || 0;
            const retribusi = parseFloat(document.getElementById('invoiceRetribusi').value) || 0;
            const total = (visits * tarif) + retribusi;
            document.getElementById('invoiceTotal').value = total;
            document.getElementById('invoiceTotalDisplay').textContent = formatRupiah(total);
        };

        // ===== SAVE INVOICE + JURNAL =====
        window.saveInvoice = async function(e) {
            e.preventDefault();
            const clientId = document.getElementById('invoiceClient').value;
            const clientName = document.getElementById('invoiceClient').options[document.getElementById('invoiceClient').selectedIndex].text;
            const period = document.getElementById('invoicePeriod').value;
            const visits = parseInt(document.getElementById('invoiceVisits').value);
            const weight = parseFloat(document.getElementById('invoiceWeight').value) || 0;
            const tarif = parseFloat(document.getElementById('invoiceTarif').value);
            const retribusi = parseFloat(document.getElementById('invoiceRetribusi').value);
            const total = parseFloat(document.getElementById('invoiceTotal').value);
            const notes = document.getElementById('invoiceNotes').value;

            const invoiceNumber = 'INV-' + period.replace('-', '') + '-' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
            const today = new Date().toISOString().split('T')[0];

            try {
                // 1. Insert Invoice
                const { data: invoice, error: invError } = await supabase.from('invoices').insert({
                    invoice_number: invoiceNumber,
                    client_id: clientId,
                    invoice_date: today,
                    due_date: today,
                    period_month: period,
                    total_visits: visits,
                    total_weight: weight,
                    amount_visits: visits * tarif,
                    amount_retribution: retribusi,
                    total_amount: total,
                    status: 'UNPAID',
                    notes: notes
                }).select().single();

                if (invError) throw invError;

                // 2. Buat Jurnal Otomatis (Double Entry)
                const journalNumber = 'JV-' + period.replace('-', '') + '-' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
                
                // Cari akun Piutang (1-2000), Pendapatan Jasa (4-1001), Pendapatan Retribusi (4-1002)
                const { data: akunPiutang } = await supabase.from('accounts').select('id').eq('code', '1-2000').single();
                const { data: akunJasa } = await supabase.from('accounts').select('id').eq('code', '4-1001').single();
                const { data: akunRetribusi } = await supabase.from('accounts').select('id').eq('code', '4-1002').single();

                if (akunPiutang && akunJasa && akunRetribusi) {
                    // Header Jurnal
                    const { data: journal } = await supabase.from('journal_entries').insert({
                        entry_number: journalNumber,
                        entry_date: today,
                        reference_type: 'SALES_INVOICE',
                        reference_id: invoice.id,
                        description: `Invoice ${invoiceNumber} - ${clientName} Periode ${period}`,
                        status: 'POSTED',
                        created_by: 'admin@raj.com'
                    }).select().single();

                    // Detail Jurnal
                    await supabase.from('journal_entry_lines').insert([
                        { journal_entry_id: journal.id, account_id: akunPiutang.id, debit: total, credit: 0, description: `Piutang ${clientName}` },
                        { journal_entry_id: journal.id, account_id: akunJasa.id, debit: 0, credit: visits * tarif, description: `Pendapatan Jasa Angkut (${visits} ritase)` },
                        { journal_entry_id: journal.id, account_id: akunRetribusi.id, debit: 0, credit: retribusi, description: 'Pendapatan Retribusi' }
                    ]);
                }

                showAlert(`Invoice ${invoiceNumber} berhasil dibuat beserta jurnal akuntansi!`, 'success');
                closeModal('modalInvoice');
                document.getElementById('formInvoice').reset();
                loadInvoices();
                loadDashboard();
            } catch (e) {
                console.error(e);
                showAlert('Gagal: ' + e.message, 'error');
            }
        };

        // ===== LOAD INVOICES =====
        async function loadInvoices() {
            document.getElementById('loadingInvoices').style.display = 'block';
            document.getElementById('tableInvoicesContainer').style.display = 'none';

            try {
                const { data, error } = await supabase
                    .from('invoices')
                    .select('*, clients(name)')
                    .order('invoice_date', { ascending: false });

                document.getElementById('loadingInvoices').style.display = 'none';

                if (error) throw error;

                if (!data || data.length === 0) {
                    document.getElementById('tableInvoicesContainer').style.display = 'block';
                    document.getElementById('tbodyInvoices').innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;">Belum ada invoice.</td></tr>';
                    return;
                }

                document.getElementById('tableInvoicesContainer').style.display = 'block';
                const tbody = document.getElementById('tbodyInvoices');
                tbody.innerHTML = '';

                data.forEach(inv => {
                    const statusClass = inv.status === 'PAID' ? 'badge-paid' : inv.status === 'PARTIAL' ? 'badge-invoiced' : 'badge-pending';
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><strong>${inv.invoice_number}</strong></td>
                        <td>${inv.clients?.name || '-'}</td>
                        <td>${new Date(inv.invoice_date).toLocaleDateString('id-ID')}</td>
                        <td>${inv.period_month}</td>
                        <td><strong>${formatRupiah(inv.total_amount)}</strong></td>
                        <td><span class="badge ${statusClass}">${inv.status}</span></td>
                        <td>
                            ${inv.status !== 'PAID' ? `<button class="btn btn-sm btn-success" onclick="markPaid('${inv.id}')"><i class="fa-solid fa-check"></i> Lunas</button>` : ''}
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            } catch (e) {
                console.error(e);
                document.getElementById('loadingInvoices').style.display = 'none';
                showAlert('Gagal memuat invoice: ' + e.message, 'error');
            }
        }

        // ===== MARK PAID =====
        window.markPaid = async function(id) {
            if (!confirm('Tandai invoice ini sebagai LUNAS?')) return;
            try {
                const { error } = await supabase.from('invoices').update({
                    status: 'PAID',
                    paid_date: new Date().toISOString().split('T')[0],
                    payment_method: 'Transfer Bank'
                }).eq('id', id);
                if (error) throw error;
                showAlert('Invoice ditandai LUNAS!', 'success');
                loadInvoices();
                loadDashboard();
            } catch (e) {
                showAlert('Gagal: ' + e.message, 'error');
            }
        };

        // ===== UTILS =====
        function formatRupiah(angka) {
            if (!angka) return 'Rp 0';
            return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        // ===== INIT =====
        loadDashboard();
        loadRitase();
    </script>
</body>
</html>