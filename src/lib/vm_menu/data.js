export const schemas = {"mysql": {"mysql_password": "string", "MySQLDebug": "boolean", "MySQLZip": "string"}, "general-linux": {"dns_server": "list", "default_users": "list", "default_admins": "list", "default_password": "string"}, "sliver-server": {"msf_install_directory": "string", "metasploit_version": "string", "sliver_gpg_key_id": "string", "sliver_version": "string"}, "bind9": {"upstream_dns_forwarders": "list", "domain": "string", "dns_a_records": "list"}, "winrm": {"WinrmConfigSSL": "int", "WinrmDebug": "boolean"}, "domaincontroller": {"domain": "string", "default_password": "string", "upstream_dns_forwards": "list", "domain_users": "list", "domain_admins": "list"}, "smb": {"SMBShareName": "string", "SMBSharePath": "string", "SMBScoreFileContent": "string", "SMBScoreFileName": "string", "SMBDebug": "boolean"}, "kubernetes-node": {}, "general-windows": {"default_users": "list", "default_password": "string"}, "kubernetes-worker": {}, "kubernetes": {}, "sliver-client": {}, "jumpbox": {}, "scoreboard": {"scoreboard_lan": "int"}, "domainjoin": {"DomainJoinDebug": "boolean", "domain": "string", "DomainJoinUsername": "string", "DomainJoinPassword": "string", "DomainJoinDNSIP": "string"}, "kubernetes-control": {"pod_network_cidr": "string"}, "ftp-bsd": {"ftp_username": "string", "ftp_password": "string", "ftp_filename": "string", "ftp_file_content": "string"}, "iis": {"IISDebug": "boolean", "IISConfigSSL": "int", "iis_web_root": "string"}, "rdp": {"RDPDebug": "boolean", "RDPUsers": "list"}, "nfs": {"nfs_export_name": "string", "nfs_export_path": "string", "nfs_file_content": "string", "nfs_file_path": "string", "nfs_debug": "boolean"}, "zencart": {"zencart_db_server": "string", "zencart_db_username": "string", "zencart_db_password": "string", "zencart_db": "string"}, "hmail": {"HmailInstaller": "string", "HmailDebug": "boolean", "domain": "string"}, "pfsense": {"default_password": "string"}, "nfs-client": {"nfs_server": "string", "nfs_share": "string", "local_mount": "string"}, "docker": {}, "vsftp": {"ftp_username": "string", "default_password": "string", "ftp_filename": "string", "ftp_file_content": "string"}};

export const defaults = {"mysql": {"mysql_password": "Chiapet1", "MySQLDebug": true, "MySQLZip": "files/mysql-8.0.32-winx64.zip"}, "general-linux": {"dns_server": ["1.1.1.1"], "default_users": ["sylvia", "chasek", "eleanor", "pablo", "kayla", "wendell", "jake", "karen", "bradley", "raymond", "howard", "suzanne", "louise", "glenn", "lynn", "enzo", "peggy", "margaret", "melvin"], "default_admins": ["sylvia", "chaseh", "emilb", "grantm"], "default_password": "Chiapet1"}, "sliver-server": {"msf_install_directory": "/opt/metasploit-framework", "metasploit_version": "6.2.20", "sliver_gpg_key_id": "4449039C", "sliver_version": "v1.5.36"}, "bind9": {"upstream_dns_forwarders": ["1.1.1.1", "8.8.8.8"], "domain": "goose.com", "dns_a_records": [{"name": "www", "host": "172.16.0.0"}]}, "winrm": {"WinrmConfigSSL": 0, "WinrmDebug": false}, "domaincontroller": {"domain": "goose.com", "default_password": "Chiapet1", "upstream_dns_forwards": ["1.1.1.1", "8.8.8.8"], "domain_users": ["eholmes", "sbalawani", "mkarpeles", "klay", "pgregory", "rgill", "lbream", "amoss", "mstryker", "aneumann", "tmilton", "rignatova", "jskilling", "ttzu", "pgibbons"], "domain_admins": ["eholmes", "sbalwani", "mkarpeles", "klay"]}, "smb": {"SMBShareName": "Users", "SMBSharePath": "C:\\Users", "SMBScoreFileContent": "Wow! You read me!", "SMBScoreFileName": "score.txt", "SMBDebug": false}, "kubernetes-node": null, "general-windows": {"default_users": ["sylvia", "chasek", "eleanor", "pablo", "kayla", "wendell", "jake", "karen", "bradley", "raymond", "howard", "suzanne", "louise", "glenn", "lynn", "enzo", "peggy", "margaret", "melvin"], "default_password": "Chiapet1"}, "kubernetes-worker": null, "kubernetes": null, "sliver-client": null, "jumpbox": null, "scoreboard": {"scoreboard_lan": 1}, "domainjoin": {"DomainJoinDebug": false, "domain": "goose.com", "DomainJoinUsername": "Goose\\Administrator", "DomainJoinPassword": "Chiapet1", "DomainJoinDNSIP": ""}, "kubernetes-control": {"pod_network_cidr": "192.168.0.0/16"}, "ftp-bsd": {"ftp_username": "sylvia", "ftp_password": "Chiapet1", "ftp_filename": "data", "ftp_file_content": "Wow! You read me!"}, "iis": {"IISDebug": false, "IISConfigSSL": 0, "iis_web_root": "C:\\inetpub\\wwwroot"}, "rdp": {"RDPDebug": false, "RDPUsers": ["Administrator"]}, "nfs": {"nfs_export_name": "Files", "nfs_export_path": "C:\\Users\\Administrator\\", "nfs_file_content": "Wow! You read me!", "nfs_file_path": "score.txt", "nfs_debug": false}, "zencart": {"zencart_db_server": "localhost", "zencart_db_username": "root", "zencart_db_password": "Chiapet1", "zencart_db": "zencart"}, "hmail": {"HmailInstaller": "files/hmail_5.6.8_installer.exe", "HmailDebug": false, "domain": "goose.com"}, "pfsense": {"default_password": "Chiapet1"}, "nfs-client": {"nfs_server": "172.16.0.2", "nfs_share": "/data/", "local_mount": "/mnt/data/"}, "docker": null, "vsftp": {"ftp_username": "sylvia", "default_password": "Chiapet1", "ftp_filename": "data", "ftp_file_content": "Wow! You read me!"}}

export const service_icons = {
    'mysql': 'mysql.png',
    'postgresql': 'postgres.png', // https://wiki.postgresql.org/wiki/Logo
    'kubernetes': 'kubernetes.png', // https://github.com/kubernetes/kubernetes/blob/master/logo
};

export const available_services = [
    { label: 'MySQL', value: 'mysql', keywords: 'db, database', meta: { icon: 'database' } },
    { label: 'Bind9', value: 'bind9', keywords: 'dns, bind', meta: { icon: 'database' } },
    //{ label: 'PostgreSQL', value: 'postgresql', keywords: 'db, database, psql', meta: { icon: 'database' } },
    { label: 'Kubernetes', value: 'kubernetes', keywords: 'containers', meta: { icon: 'kubernetes' } },
];
