class NewComment {
  /**
   * @TODO 5
   * Lengkapi kode class entities `NewComment` dengan spesifikasi berikut:
   *
   * 1. Memiliki properti `threadId`, `content`, dan `owner`.
   * 2. Nilai-nilai pada properti tersebut diambil dari
   *    argumen `constructor` yang merupakan object `payload`.
   * 3. Pastikan Anda memverifikasi nilainya sebelum dimasukkan ke properti.
   *    - threadId -> harus terdefinisi dan merupakan `string`
   *    - content -> harus terdefinisi dan merupakan `string`
   *    - owner -> harus terdefinisi dan merupakan `string`
   */
  constructor(payload) {
    this._verifyPayload(payload);

    const { threadId, content, owner } = payload;
    this.content = content;
    this.owner = owner;
    this.threadId = threadId;
  }

  _verifyPayload({ threadId, content, owner }) {
    if (!content || !owner || !threadId) {
      throw new Error('NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof content !== 'string' ||
      typeof owner !== 'string' ||
      typeof threadId !== 'string'
    ) {
      throw new Error('NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (
      content.trim().length === 0 ||
      owner.trim().length === 0 ||
      threadId.trim().length === 0
    ) {
      throw new Error('NEW_COMMENT.CANNOT_BE_EMPTY_STRING');
    }
  }
}

module.exports = NewComment;
