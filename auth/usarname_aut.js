const users = {}; // Basit bir kullanıcı veri tabanı

function registerUser(username, password) {
  if (users[username]) {
    throw new Error('User already exists');
  }
  users[username] = { password };
}

function loginUser(username, password) {
  if (!users[username] || users[username].password !== password) {
    throw new Error('Invalid username or password');
  }
  return 'Login successful';
}

module.exports = { registerUser, loginUser };
