const NewComment = require('../../Domains/comments/entities/NewComment');

class AddCommentUseCase {
  constructor({ commentRepository, threadRepository, userRepository }) {
    this._commentRepository = commentRepository;
    this._threadRepository = threadRepository;
    this._userRepository = userRepository;
  }

  async execute(useCasePayload, useCaseThreadId, useCaseCredential) {
    /**
     * @TODO 7
     * Tuliskan kode alur logika dalam menambahkan komentar baru yang diambil dari `useCasePayload`
     * ke dalam database.
     *
     * Catatan:
     * - Manfaatkanlah entities `NewComment` untuk memastikan nilai `useCasePayload` valid.
     * - Gunakan `this._threadRepository` dan method abstract di dalamnya
     *   untuk berinteraksi dengan database.
     * - Jika thread tidak ditemukan (dilihat dari `threadId`),
     *   bangkitkan error dengan pesan 'ADD_COMMENT_USE_CASE.THREAD_NOT_FOUND'
     * - Kembalikan method `execute` dengan nilai yang dihasilkan dari pemanggilan
     *   fungsi `this._commentRepository.addComment(newComment);`
     */

    const { content } = new NewComment(useCasePayload);

    const thread = await this._threadRepository.getThreadById(useCaseThreadId);

    if (!thread) {
      throw new Error('ADD_COMMENT_USE_CASE.THREAD_NOT_FOUND');
    }

    const user = await this._userRepository.getUserById(useCaseCredential);

    return await this._commentRepository.addComment(
      content,
      thread.id,
      user.id
    );
  }
}

module.exports = AddCommentUseCase;
